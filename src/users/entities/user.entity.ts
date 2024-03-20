import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Field(() => String)
  @Column({ name: 'email', unique: true })
  email: string;

  @HideField()
  @Column({ name: 'password' })
  password: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'phone_number', nullable: true, unique: true })
  phoneNumber?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'first_name', nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'last_name', nullable: true })
  lastName?: string;

  @Field(() => Boolean)
  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Field(() => Date)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Expose()
  get name(): string {
    return this.fullName || this.email;
  }

  @Expose()
  get isDeleted(): boolean {
    return !!this.deletedAt;
  }

  @Expose()
  get isDeactivated(): boolean {
    return !this.isActive || this.isDeleted;
  }
}
