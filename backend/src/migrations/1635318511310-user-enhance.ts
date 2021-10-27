import {MigrationInterface, QueryRunner} from "typeorm";

export class userEnhance1635318511310 implements MigrationInterface {
    name = 'userEnhance1635318511310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "avatarUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "coverPhotoUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "location" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "website" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "birthday" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "website"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "coverPhotoUrl"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatarUrl"`);
    }

}
