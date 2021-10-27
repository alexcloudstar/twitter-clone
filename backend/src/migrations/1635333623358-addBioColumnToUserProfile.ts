import {MigrationInterface, QueryRunner} from "typeorm";

export class addBioColumnToUserProfile1635333623358 implements MigrationInterface {
    name = 'addBioColumnToUserProfile1635333623358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "bio" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "public"."user" ALTER COLUMN "birthday" SET DEFAULT '"2021-10-27T11:20:23.441Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ALTER COLUMN "birthday" SET DEFAULT '2021-10-27 11:16:29.729'`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "bio"`);
    }

}
