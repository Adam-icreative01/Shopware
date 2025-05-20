<!-- (new OneToManyAssociationField('basic_example', BasicExampleDefinition::class, 'country_id')) -->

<?php declare(strict_types=1);

namespace BasicExample\Extension;

use Shopware\Core\Framework\DataAbstractionLayer\EntityExtension;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToManyAssociationField;
use BasicExample\Core\Content\BasicExample\BasicExampleCollection;
use Shopware\Core\System\Country\CountryDefinition;

class CountryExtension extends EntityExtension
{
    public function extendFields(FieldCollection $collection): void
    {
        $collection->add(
            (new OneToManyAssociationField(
                'basic_example',
                BasicExampleCollection::class,
                'country_id'
            ))
        );
    }

    public function getDefinitionClass(): string
    {
        return CountryDefinition::class;
    }
}