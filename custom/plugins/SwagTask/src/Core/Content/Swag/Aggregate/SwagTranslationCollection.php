<?php declare(strict_types=1);

namespace SwagTask\Core\Content\Swag\Aggregate;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @package framework
 * @method void                add(SwagTranslationEntity $entity)
 * @method void                set(string $key, SwagTranslationEntity $entity)
 * @method SwagTranslationEntity[]    getIterator()
 * @method SwagTranslationEntity[]    getElements()
 * @method SwagTranslationEntity|null get(string $key)
 * @method SwagTranslationEntity|null first()
 * @method SwagTranslationEntity|null last()
 */
class SwagTranslationCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return SwagTranslationEntity::class;
    }
}