CREATE TABLE `swag_language_pack_language` (
    `id` BINARY(16) NOT NULL,
    `administration_active` TINYINT(1) NULL DEFAULT '0',
    `sales_channel_active` TINYINT(1) NULL DEFAULT '0',
    `language_id` BINARY(16) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `swag` (
    `id` BINARY(16) NOT NULL,
    `country_id` BINARY(16) NULL,
    `state_id` BINARY(16) NULL,
    `media_id` BINARY(16) NULL,
    `product_id` BINARY(16) NULL,
    `prouduct_version_id` BINARY(16) NULL,
    `active` TINYINT(1) NULL DEFAULT '0',
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `json.swag.translated` CHECK (JSON_VALID(`translated`)),
    KEY `fk.swag.country_id` (`country_id`),
    KEY `fk.swag.state_id` (`state_id`),
    KEY `fk.swag.product_id` (`product_id`,`prouduct_version_id`),
    CONSTRAINT `fk.swag.country_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT `fk.swag.state_id` FOREIGN KEY (`state_id`) REFERENCES `country_state` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT `fk.swag.product_id` FOREIGN KEY (`product_id`,`prouduct_version_id`) REFERENCES `product` (`id`,`version_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `swag_translation` (
    `name` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NULL,
    `swag_id` BINARY(16) NOT NULL,
    `language_id` BINARY(16) NOT NULL,
    PRIMARY KEY (`swag_id`,`language_id`),
    KEY `fk.swag_translation.swag_id` (`swag_id`),
    KEY `fk.swag_translation.language_id` (`language_id`),
    CONSTRAINT `fk.swag_translation.swag_id` FOREIGN KEY (`swag_id`) REFERENCES `swag` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT `fk.swag_translation.language_id` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;