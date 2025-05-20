<?php declare(strict_types=1);

namespace BasicExample\Core\Content\BasicExample;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void add(BasicExampleEntity $entity)
 * @method void set(string $key, BasicExampleEntity $entity)
 * @method BasicExampleEntity[] getIterator()
 * @method BasicExampleEntity[] getElements()
 * @method BasicExampleEntity|null get(string $key)
 * @method BasicExampleEntity|null first()
 * @method BasicExampleEntity|null last()
 */
class BasicExampleCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return BasicExampleEntity::class;
    }
}
