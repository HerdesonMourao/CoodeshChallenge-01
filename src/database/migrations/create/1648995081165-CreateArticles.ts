import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArticles1648995081165 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "articles",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "featured",
            type: "boolean",
            isNullable: false,
            default: false,
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "url",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "imageUrl",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "newsSite",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "summary",
            type: "longtext",
            isNullable: false,
          },
          {
            name: "publishedAt",
            type: "datetime",
            isNullable: false,
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "datetime",
            isNullable: false,
            default: "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("articles");
  }
}
