import {MigrationInterface, QueryRunner} from "typeorm";

export class addCreatorUsernametoRepliesEntity1635333389648 implements MigrationInterface {
    name = 'addCreatorUsernametoRepliesEntity1635333389648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "avatarUrl" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "coverPhotoUrl" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "name" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "location" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "website" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "birthday" TIMESTAMP NOT NULL DEFAULT '"2021-10-27T11:16:29.729Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "website"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "coverPhotoUrl"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "avatarUrl"`);
    }

}
