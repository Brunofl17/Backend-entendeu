import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Question } from "./Question"

//Entidade das respostas
@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 1
    })
    alternative: string

    @ManyToOne(() => Question, question => question.answers)
    question: Question
}