import {prisma} from "./prismaClient.js"

export class PresenceRepository{
    static create = async( data: {student_id: string, classroom_id: string, presence: boolean}) => {
        return prisma.studentPresence.create({data:{student_id: data.student_id, classroom_id: data.classroom_id, presence: data.presence}})
    }

    static studentInClass = async(student_id: string, class_id: string)=>{
        return prisma.studentClass.findFirst({where: {student_id, class_id}})
    }
}
