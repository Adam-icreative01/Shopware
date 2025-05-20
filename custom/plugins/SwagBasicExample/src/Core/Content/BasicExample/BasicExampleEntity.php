<?php declare(strict_types=1);

namespace BasicExample\Core\Content\BasicExample;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;
use Shopware\Core\System\Country\CountryDefinition;
use Symfony\Component\Validator\Constraints\Country;

class BasicExampleEntity extends Entity
{
    use EntityIdTrait;

    protected ?string $name;

    protected ?string $description;

    protected bool $active;

    protected ?string $countryId;

    protected ?CountryDefinition $country;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }

    public function isActive(): bool
    {
        return $this->active;
    }

    public function setActive(bool $active): void
    {
        $this->active = $active;
    }

    public function getCountry() : ?CountryDefinition
    {
        return $this->country;
    }

    public function setCountry(?CountryDefinition $country)
    {
        $this->country = $country;
    }
    
    public function getCountryId() : ?string
    {
        return $this->countryId;
    }

    public function setCountryId(?string $countryId)
    {
        $this->countryId = $countryId;
    }
}
