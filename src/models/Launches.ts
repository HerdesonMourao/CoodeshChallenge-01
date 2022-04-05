import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid';
import { Articles } from "./Articles";

@Entity("launches")
class Launches {
  @PrimaryColumn()
  id: string;

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

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Launches };