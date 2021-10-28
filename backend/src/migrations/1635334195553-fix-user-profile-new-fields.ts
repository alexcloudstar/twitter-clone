import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUserProfileNewFields1635334195553 implements MigrationInterface {
    name = 'fixUserProfileNewFields1635334195553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "avatarUrl" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "coverPhotoUrl" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "name" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "bio" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "location" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "website" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "birthday" TIMESTAMP NOT NULL DEFAULT '"2021-10-27T11:29:55.658Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "website"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "bio"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "coverPhotoUrl"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "avatarUrl"`);
    }

}
