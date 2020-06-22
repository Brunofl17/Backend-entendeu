import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Question } from "./Question"
/*entidade Sala que vai armazenar o codigo do estudante para visualizar as perguntas
 e para o mvc o professorer tem um codigo para visualizar as perguntas feitas*/
@Entity()
export class Room {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 6
    })
    studentCode: string

    @Column({
        length: 6
    })
    teacherCode: string

    @OneToMany(() => Question, question => question.room)
    questions: Question[]
}