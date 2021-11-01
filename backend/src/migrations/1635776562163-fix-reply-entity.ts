import {MigrationInterface, QueryRunner} from "typeorm";

export class fixReplyEntity1635776562163 implements MigrationInterface {
    name = 'fixReplyEntity1635776562163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '"2021-11-01T14:22:42.249Z"'`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '2021-11-01 14:22:10.638'`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
