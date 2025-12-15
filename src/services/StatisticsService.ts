import { ClassRepository } from "../repositories/ClassRepository.js"
import { ClassroomRepository } from "../repositories/ClassroomRepository.js"
import { ConfigBeltRepository } from "../repositories/ConfigBeltRepository.js"
import { PresenceRepository } from "../repositories/PresenceRepository.js"
import { StudentRepository } from "../repositories/StudentRepository.js"
import { UserRepository } from "../repositories/UserRepository.js"

export class StatisticsService {

    static fitGraduate = async() =>{
        const students = await StudentRepository.findAll()

        let fits = 0

        for(let i=0; i < students.length; i++){
            const student = students[i]
            const belt = await ConfigBeltRepository.findByBelt(student.belt)
            const max_frequency = belt?.max_frequency
            const grade =  belt?.grade

            if(grade != null && ((student.grade < grade && student.current_frequency === max_frequency) || (student.grade === belt?.grade && student.current_frequency === max_frequency))){
                fits++
            }
        }
        return fits
    }

    static avarageFrequency = async() =>{

        const classrooms = await ClassroomRepository.findAll()

        let presents = 0
        let total = 0

        for(let i=0; i < classrooms.length; i++){
            const classroom = classrooms[i]

            const presences = await PresenceRepository.findByClassroom(classroom.id)
            for(let j=0; j < presences.length; j++){
                total++

                if(presences[j].presence === true){
                    presents++
                }
            }
        }

        if(total === 0){
            return 0

        }else{
            const percentage = (presents/total)*100
            return Math.round(percentage)
        }
    }

    static futureClassrooms = async() =>{
        const classrooms = await ClassroomRepository.findAll()
        const now = new Date()
        let future_classrooms = 0

        for(let i=0; i < classrooms.length; i++){
            const classroom = classrooms[i]

            if(classroom.classroom_date && new Date(classroom.classroom_date) > now){
                future_classrooms ++
            }
        }
        return future_classrooms
    }

    static summary = async() =>{

        const quant_students = await StudentRepository.quant()
        const fits_to_graduate = await this.fitGraduate()
        const media_frequency = await this.avarageFrequency()
        const quant_classes = await ClassRepository.quant()
        const quant_users = await UserRepository.quant()
        const future_classrooms = await this.futureClassrooms()

        return {quant_students: quant_students, fits_to_graduate: fits_to_graduate, media_frequency: media_frequency, quant_classes: quant_classes, quant_teachers: quant_users, future_classrooms: future_classrooms}
    }

    static graphic_presences = async()=>{
        const classrooms = await ClassroomRepository.findAll()

        const now = new Date()
        const last_sunday = new Date()
        last_sunday.setDate(now.getDate() - now.getDay() - 1 )
        last_sunday.setHours(23, 59, 59, 999)

        const weeks : Record <string, number> = {
            "Semana 1": 0,
            "Semana 2": 0,
            "Semana 3": 0,
            "Semana 4": 0
        }

        for(let i=0; i < classrooms.length; i++){
            const classroom = classrooms[i]
            const classroom_date = new Date(classroom.classroom_date)

            const four_weeks_ago = new Date(last_sunday)
            four_weeks_ago.setDate(last_sunday.getDate() - 27)

            if(classroom_date < four_weeks_ago || classroom_date > last_sunday){
                continue
            }

            const quant_days = Math.floor((last_sunday.getTime() - classroom_date.getTime()))/(1000*60*60*24)
            let week_number = Math.floor(quant_days/7) + 1

            if(week_number < 1){
                week_number = 1
            }
            if(week_number > 4){
                week_number = 4
            }

            const week = `Semana ${week_number}`
            if(!weeks[week]){
                weeks[week] = 0
            }

            const presences = await PresenceRepository.findByClassroom(classroom.id)
            for(let j=0; j < presences.length; j++){
                if(presences[j].presence === true){
                    weeks[week]++
                }
            }
        }

        return weeks
    }

    static graphic_classrooms = async()=>{
        const months: Record <string, number> = {}

        const classrooms = await ClassroomRepository.findAll()

        for(let i=0; i < classrooms.length; i++){
            const classroom = classrooms[i]
            const classroom_date = new Date(classroom.classroom_date)
            const month_index = classroom_date.getMonth()

            let month = ""
            if(month_index === 0) month = "Janeiro"
            if(month_index === 1) month = "Fevereiro"
            if(month_index === 2) month = "Março"
            if(month_index === 3) month = "Abril"
            if(month_index === 4) month = "Maio"
            if(month_index === 5) month = "Junho"
            if(month_index === 6) month = "Julho"
            if(month_index === 7) month = "Agosto"
            if(month_index === 8) month = "Setembro"
            if(month_index === 9) month = "Outubro"
            if(month_index === 10) month = "Novembro"
            if(month_index === 11) month = "Dezembro"

            const month_key = `${month}/${classroom_date.getFullYear()}`

            if(!months[month_key]){
                months[month_key] = 0
            }

            months[month_key]++

        }

        return months
    }
}