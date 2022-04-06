import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Articles } from "./Articles";

@Entity("events")
class Events {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_articles: number;

  @JoinColumn({ name: 'id_articles'})
  @ManyToOne(() => Articles)
  articles: Articles;

  @Column()
  provider: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export { Events };