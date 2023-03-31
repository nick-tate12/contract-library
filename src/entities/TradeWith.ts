import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TradeWith {
  @PrimaryGeneratedColumn('uuid')
  mill: string;

  @Column({ unique: true })
  marketer: string;
  // References?
}
