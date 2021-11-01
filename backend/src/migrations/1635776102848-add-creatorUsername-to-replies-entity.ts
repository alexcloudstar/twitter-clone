import {MigrationInterface, QueryRunner} from "typeorm";

export class addCreatorUsernameToRepliesEntity1635776102848 implements MigrationInterface {
    name = 'addCreatorUsernameToRepliesEntity1635776102848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "creatorUsername"`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "creatorUsername" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '"2021-11-01T14:15:02.926Z"'`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '2021-11-01 14:14:36.591'`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "creatorUsername"`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "creatorUsername" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
