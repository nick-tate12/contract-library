import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rice {
  @PrimaryGeneratedColumn('uuid')
  riceID: string;

  @Column({ unique: true })
  variety: string;

}
