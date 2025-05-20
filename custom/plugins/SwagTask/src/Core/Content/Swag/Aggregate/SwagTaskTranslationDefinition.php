<?php declare(strict_types=1);

namespace SwagTask\Core\Content\Swag\Aggregate;

use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\ApiAware;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\EntityTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use SwagTask\Core\Content\Swag\SwagTaskDefinition;


class SwagTaskTranslationDefinition extends EntityTranslationDefinition
{
    public const ENTITY_NAME = 'swag_translation';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getEntityClass(): string
    {
        return SwagTranslationEntity::class;
    }

    public function getCollectionClass(): string
    {
        return SwagTranslationCollection::class;
    }

    public function getParentDefinitionClass(): string
    {
        return SwagTaskDefinition::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([            
            (new StringField('name', 'name'))->addFlags(new ApiAware(),new Required()),
            (new StringField('city', 'city'))->addFlags(new Required()),                         
        ]);
    }
}
