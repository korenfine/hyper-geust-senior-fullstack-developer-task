import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Roles } from "../dto/roles.dto";
import { UserStatusDto } from "../dto/userStatus.dto";


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({
    type: 'text',
    transformer: {
      to: (value: Roles[]) => JSON.stringify(value),
      from: (value: Roles) => JSON.parse(value),
    },
  })
  role: Roles[];

  @Column()
  status: UserStatusDto;
}
