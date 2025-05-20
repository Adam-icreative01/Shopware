<?php declare(strict_types=1);

namespace BasicExample\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1846613704CreateBasicExampleTable extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1846613704;
    }

    public function update(Connection $connection): void
    {
        $sql = <<<SQL
        CREATE TABLE IF NOT EXISTS `basic_example` (
            `id` BINARY(16) NOT NULL,
            `name` VARCHAR(255) NULL,
            `description` VARCHAR(255) NULL,
            `active` TINYINT(1) NULL DEFAULT '0',
            `country_id` BINARY(16) NULL,
            `created_at` DATETIME(3) NOT NULL,
            `updated_at` DATETIME(3) NULL,
            PRIMARY KEY (`id`),
            KEY `idx.basic_example.country_id` (`country_id`),
            CONSTRAINT `fk.basic_example.country_id` FOREIGN KEY (`country_id`) 
            REFERENCES `country` (`id`) 
            ON DELETE SET NULL 
            ON UPDATE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        SQL;

        $connection->executeStatement($sql);
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}



// CREATE TABLE IF NOT EXISTS `basic_example` (
//     `id` BINARY(16) NOT NULL,
//     `name` VARCHAR(255) COLLATE utf8mb4_unicode_ci,
//     `description` VARCHAR(255) COLLATE utf8mb4_unicode_ci,
//     `active` TINYINT(1) COLLATE utf8mb4_unicode_ci,
//     `created_at` DATETIME(3) NOT NULL,
//     `updated_at` DATETIME(3),
//     PRIMARY KEY (`id`)
// )
//     ENGINE = InnoDB
//     DEFAULT CHARSET = utf8mb4
//     COLLATE = utf8mb4_unicode_ci;
