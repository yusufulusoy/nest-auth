import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '@/auth/auth.service';
import { User } from './entities/user.entity';
import { PasswordService } from './password/password.service';
import { AuthPayload } from '@/auth/interfaces/payload.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly authService: AuthService,
    private readonly passwordService: PasswordService,
  ) {}

  /**
   * Finds a user by ID and returns the user if found, otherwise throws an error.
   * @param id - The ID of the user to find.
   * @returns The user with the specified ID.
   * @throws Error if the user is not found or is deactivated.
   */
  async findOneById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('USER_NOT_FOUND');
    }
    if (user.isDeactivated) {
      throw new Error('USER_IS_DEACTIVATED');
    }
    return user;
  }

  /**
   * Finds a user by email and returns the user if found, otherwise throws an error.
   * @param email - The email of the user to find.
   * @returns The user with the specified email.
   * @throws Error if the user is not found or is deactivated.
   */
  async findOneByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('USER_NOT_FOUND');
    }
    if (user.isDeactivated) {
      throw new Error('USER_IS_DEACTIVATED');
    }
    return user;
  }

  /**
   * Creates a new user with the provided data and returns the created user.
   * @param data - The data of the user to create.
   * @returns The created user.
   * @throws Error if there is an error creating the user.
   */
  async create(data: Partial<User>): Promise<User> {
    const hashedPassword = await this.passwordService.hash(data.password);

    try {
      const user = this.usersRepository.create({
        ...data,
        password: hashedPassword,
      });
      return await this.usersRepository.save(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Updates the user with the specified ID and returns the updated user.
   * @param id - The ID of the user to update.
   * @param data - The data to update the user with.
   * @returns The updated user.
   * @throws Error if there is an error updating the user.
   */
  async update(id: string, data: Partial<User>): Promise<User> {
    try {
      await this.usersRepository.update(id, data);
      return await this.usersRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Deactivates the user with the specified ID and signs them out.
   * @param payload - The payload containing the user ID.
   * @throws Error if there is an error deactivating the user.
   */
  async deactivate(payload: Partial<AuthPayload>): Promise<void> {
    try {
      await this.usersRepository.update(payload.sub, { isActive: false });
      await this.authService.signOut(payload);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Activates the user with the specified ID.
   * @param id - The ID of the user to activate.
   * @throws Error if there is an error activating the user.
   */
  async activate(id: string): Promise<void> {
    try {
      await this.usersRepository.update(id, {
        isActive: true,
        deletedAt: null,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Soft deletes the user with the specified ID and signs them out.
   * @param payload - The payload containing the user ID.
   * @throws Error if there is an error soft deleting the user.
   */
  async softDelete(payload: Partial<AuthPayload>): Promise<void> {
    try {
      await this.usersRepository.softDelete(payload.sub);
      await this.authService.signOut(payload);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Compares the provided password with the encrypted password and returns true if they match, otherwise throws an error.
   * @param password - The password to compare.
   * @param encrypted - The encrypted password to compare against.
   * @returns True if the passwords match.
   * @throws Error if the passwords do not match.
   */
  async comparePassword(password: string, encrypted: string): Promise<boolean> {
    const isValidPassword = await this.passwordService.compare(password, encrypted);
    if (!isValidPassword) {
      throw new Error('INVALID_PASSWORD');
    }
    return isValidPassword;
  }
}
