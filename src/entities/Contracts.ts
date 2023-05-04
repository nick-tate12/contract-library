import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  contractID: string;

  @Column({ nullable: false })
  employeeId: string;

  @Column({ nullable: false })
  millId: string;

  @Column({ nullable: false })
  farmerId: string;

  @Column({ nullable: false, unique: true })
  cropId: string;

  @CreateDateColumn()
  createdOn: Date;
}
