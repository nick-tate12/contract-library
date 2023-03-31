import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BuysFrom {
  @PrimaryGeneratedColumn('uuid')
  marketer: string;

  @Column({ unique: true })
  farmer: string;
  // References?
}
