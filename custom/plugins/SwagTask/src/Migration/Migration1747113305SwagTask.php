<?php declare(strict_types=1);

namespace SwagTask\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

/**
 * @internal
 */
class Migration1747113305SwagTask extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1747113305;
    }

    public function update(Connection $connection): void
    {

    }
}
