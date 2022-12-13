import { Column, Entity, PrimaryGeneratedColumn, Index, CreateDateColumn } from 'typeorm';

@Entity()
export default class Log {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index()
  @Column({ name: 'type', type: 'varchar', length: 64, nullable: false })
  type!: string;

  @Column({ name: 'content', type: 'text', nullable: true })
  content!: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: string;
}
