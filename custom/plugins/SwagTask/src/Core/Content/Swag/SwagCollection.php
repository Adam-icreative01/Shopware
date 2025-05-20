<?php declare(strict_types=1);

namespace SwagTask\Core\Content\Swag;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @package framework
 * @method void                add(SwagEntity $entity)
 * @method void                set(string $key, SwagEntity $entity)
 * @method SwagEntity[]    getIterator()
 * @method SwagEntity[]    getElements()
 * @method SwagEntity|null get(string $key)
 * @method SwagEntity|null first()
 * @method SwagEntity|null last()
 */
class SwagCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return SwagEntity::class;
    }
}