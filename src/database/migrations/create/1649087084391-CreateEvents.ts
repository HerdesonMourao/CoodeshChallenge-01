import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEvents1649087084391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "events",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "id_articles",
            type: "int",
            isNullable: false,
            default: false,
          },
          {
            name: "provider",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "createdAt",
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
        foreignKeys: [
          {
            name: "FK_Articles_Events",
            referencedTableName: "articles",
            referencedColumnNames: ["id"],
            columnNames: ["id_articles"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("events");
  }
}
