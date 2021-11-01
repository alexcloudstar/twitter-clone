import {MigrationInterface, QueryRunner} from "typeorm";

export class addCreatorUsernameToReplyEntity1635790411836 implements MigrationInterface {
    name = 'addCreatorUsernameToReplyEntity1635790411836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "creatorUsername"`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "creatorUsername" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '"2021-11-01T18:13:31.917Z"'`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '2021-11-01 18:13:11.566'`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "creatorUsername"`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "creatorUsername" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
