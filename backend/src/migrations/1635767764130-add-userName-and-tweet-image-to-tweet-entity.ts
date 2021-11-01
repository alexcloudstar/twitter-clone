import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserNameAndTweetImageToTweetEntity1635767764130 implements MigrationInterface {
    name = 'addUserNameAndTweetImageToTweetEntity1635767764130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '"2021-11-01T11:56:04.213Z"'`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '2021-11-01 11:55:27.592'`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
