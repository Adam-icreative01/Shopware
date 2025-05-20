<?php declare(strict_types=1);

namespace SwagBlog\Core\Content\Blog;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\ApiAware;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslatedField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\DateTimeField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslationsAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\BoolField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Inherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use SwagBlog\Core\Content\Blog\Aggregate\BlogTranslationDefinition;
use SwagBlog\Core\Content\BlogCategory\BlogCategoryDefinition;
use SwagBlog\Core\Content\BlogCategoryMappingDefinition;
use SwagBlog\Core\Content\BlogProductMappingDefinition;

class BlogDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'blog';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getEntityClass(): string
    {
        return BlogEntity::class;
    }

    public function getCollectionClass(): string
    {
        return BlogCollection::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            new TranslatedField('name'),  
            new TranslatedField('description'),           
            new DateTimeField('release_date', 'release_date'), 

            (new ManyToManyAssociationField(
                'blogCategories',
                BlogCategoryDefinition::class,
                BlogCategoryMappingDefinition::class,
                'blog_id',
                'blog_category_id',
            ))->addFlags(new ApiAware()),

            (new ManyToManyAssociationField(
                'products',
                ProductDefinition::class,
                BlogProductMappingDefinition::class,
                'blog_id',
                'product_id',
            ))->addFlags(new ApiAware()),       

            new TranslatedField('author'),
            (new BoolField('active', 'active')),
            
            (new TranslationsAssociationField(
                BlogTranslationDefinition::class,
                'blog_id',
            ))->addFlags(new ApiAware(), new Inherited(), new Required()),                                           
        ]);
    }
}
