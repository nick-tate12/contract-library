import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  contractID: string;

  @Column()
  marketerId: string;

  @Column()
  millId: string;

  @Column()
  farmerId: string;

  @Column()
  cropId: string;

  @CreateDateColumn()
  createdOn: Date;
}
