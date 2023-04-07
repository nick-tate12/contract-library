import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Marketer {
  @PrimaryGeneratedColumn('uuid')
  riceID: string;

  @Column({ unique: true })
  variety: string;
  // CONSTRAINT fkeyID FOREIGN KEY (id)
  // REFERENCES Crop(id)
  // DEFERRABLE INITIALLY IMMEDIATE
}
