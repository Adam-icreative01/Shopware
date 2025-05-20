<?php declare(strict_types=1);

namespace SwagTask\Core\Content\Swag;

use Shopware\Core\Content\Media\MediaDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\ApiAware;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslatedField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslationsAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\BoolField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Inherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ReferenceVersionField;
use Shopware\Core\System\Country\Aggregate\CountryState\CountryStateDefinition;
use Shopware\Core\System\Country\CountryDefinition;
use SwagTask\Core\Content\Swag\Aggregate\SwagTaskTranslationDefinition;

class SwagTaskDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'swag';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getEntityClass(): string
    {
        return SwagEntity::class;
    }

    public function getCollectionClass(): string
    {
        return SwagCollection::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            new TranslatedField('name'),             
            (new TranslatedField('city')),
            (new TranslationsAssociationField(
                SwagTaskTranslationDefinition::class,
                'swag_id',
            ))->addFlags(new ApiAware(), new Inherited(), new Required()),

            new FkField('country_id', 'countryId', CountryDefinition::class),
            new ManyToOneAssociationField(
                'country',
                'country_id',
                CountryDefinition::class,
                'id',
                false
            ),

            new FkField('state_id', 'stateId', CountryStateDefinition::class),
            new ManyToOneAssociationField(
                'state',
                'state_id',
                CountryStateDefinition::class,
                'id',
                false
            ),
            new FkField('media_id', 'mediaId', MediaDefinition::class),
            new OneToOneAssociationField(
                'media',
                'media_id',
                'id',
                MediaDefinition::class,
                false
            ),

            (new FkField('product_id', 'productId', ProductDefinition::class)),
            new ReferenceVersionField(ProductDefinition::class, 'prouduct_version_id'),
            new ManyToOneAssociationField(
                'product',
                'product_id',
                ProductDefinition::class,
                'id',
                false,
            ),
            
            (new BoolField('active', 'active'))
        ]);
    }
}
