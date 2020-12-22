import {MigrationInterface, QueryRunner} from "typeorm";

export class fruits1608649586860 implements MigrationInterface {
    name = 'fruits1608649586860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fruits" ("Id" varchar PRIMARY KEY NOT NULL, "Name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fruits"`);
    }

}
