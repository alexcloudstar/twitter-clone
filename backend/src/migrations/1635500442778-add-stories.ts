import {MigrationInterface, QueryRunner} from "typeorm";

export class addStories1635500442778 implements MigrationInterface {
    name = 'addStories1635500442778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`CREATE TABLE "story" ("id" SERIAL NOT NULL, "story" character varying NOT NULL, "creatorId" integer NOT NULL, "creatorUsername" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_28fce6873d61e2cace70a0f3361" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '"2021-10-29T09:40:42.862Z"'`);
        await queryRunner.query(`ALTER TABLE "story" ADD CONSTRAINT "FK_59db3731bb1da73f87200450623" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7"`);
        await queryRunner.query(`ALTER TABLE "story" DROP CONSTRAINT "FK_59db3731bb1da73f87200450623"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "birthday" SET DEFAULT '2021-10-29 08:56:27.585'`);
        await queryRunner.query(`DROP TABLE "story"`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_f4ba8e95d5fb39eaffb3944b7a7" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
