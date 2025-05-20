<?php declare(strict_types=1);

namespace SwagBlog\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

/**
 * @internal
 */
class Migration1747727736SwagBlog extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1747727736;
    }

    public function update(Connection $connection): void
    {

    }
}
