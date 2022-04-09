import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity("articles")
class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  featured: boolean;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  imageUrl: string;

  @Column()
  newsSite: string;

  @Column('longtext')
  summary: string;

  @CreateDateColumn()
  publishedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export { Articles };