import { MigrationInterface, QueryRunner } from 'typeorm';
import {UserStatusDto} from "../dto/userStatus.dto";
import {Roles} from "../dto/roles.dto";

export class InitialUserRoleSetup1680000000000 implements MigrationInterface {
  name = 'InitialUserRoleSetup1680000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT NOT NULL UNIQUE,
                    role TEXT NOT NULL DEFAULT '${Roles.USER}',
                    status TEXT NOT NULL DEFAULT '${UserStatusDto.ENABLED}'
                )
            `);

      await queryRunner.query(`
                INSERT OR IGNORE INTO users (username, role, status) VALUES
                ('admin_user', '["${Roles.ADMIN}"]', '${UserStatusDto.ENABLED}'),
                ('regular_user', '["${Roles.USER}"]', '${UserStatusDto.ENABLED}'),
                ('editor_user', '["${Roles.EDITOR}"]', '${UserStatusDto.DELETED}')
            `);
    } catch (error) {
      console.error('Migration up error:', error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`DROP TABLE IF EXISTS users`);
    } catch (error) {
      console.error('Migration down error:', error);
      throw error;
    }
  }
}
