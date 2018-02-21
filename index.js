const ListingCategories = {
  ForRent: {
    ID: 'FOR_RENT',
    Label: 'For rent'
  },
  ForSale: {
    ID: 'FOR_SALE',
    Label: 'For sale'
  }
};

const ListingSubCategories = {
  New: {
    ID: 'NEW',
    Label: 'New'
  },
  PreOwned: {
    ID: 'PRE_OWNED',
    Label: 'Pre-owned'
  },
  Foreclosed: {
    ID: 'FORECLOSED',
    Label: 'Foreclosed'
  },
  Preselling: {
    ID: 'PRESELLING',
    Label: 'Pre-selling'
  },
  AssumeBalance: {
    ID: 'ASSUME_BALANCE',
    Label: 'Assume balance'
  },
  RentToOwn: {
    ID: 'RENT_TO_OWN',
    Label: 'Rent to own'
  }
};

const PropertyTypes = {
  LandOrLotOnly: {
    ID: 'LAND_OR_LOT_ONLY',
    Label: 'Land / Lot Only'
  },
  CommercialSpace: {
    ID: 'COMMERCIAL_SPACE',
    Label: 'Commercial Space'
  },
  Condominium: {
    ID: 'CONDOMINIUM',
    Label: 'Condominium'
  },
  Townhouse: {
    ID: 'TOWNHOUSE',
    Label: 'Townhouse'
  },
  HouseAndLot: {
    ID: 'HOUSE_AND_LOT',
    Label: 'House & Lot'
  },
  ApartmentOrFlat: {
    ID: 'APARTMENT_OR_FLAT',
    Label: 'Apartment / Flat'
  }
};

const PropertySubTypes = {
  ResidentialUse: {
    ID: 'RESIDENTIAL_USE',
    Label: 'Residential-use',
    HolidayOrVacation: {
      ID: 'HOLIDAY_OR_VACATION',
      Label: 'Holiday / Vacation'
    },
    Transient: {
      ID: 'TRANSIENT',
      Label: 'Transient'
    },
    Staycation: {
      ID: 'STAYCATION',
      Label: 'Staycation'
    },
    BusinessTravel: {
      ID: 'BUSINESS_TRAVEL',
      Label: 'Business Travel'
    },
    ApartmentSharing: {
      ID: 'APARTMENT_SHARING',
      Label: 'Apartment Sharing'
    },
    CondoSharing: {
      ID: 'CONDO_SHARING',
      Label: 'Condo Sharing'
    },
    Bedspace: {
      ID: 'BEDSPACE',
      Label: 'Bedspace'
    },
    Dormitory: {
      ID: 'DORMITORY',
      Label: 'Dormitory'
    },
    BoardingHouse: {
      ID: 'BOARDING_HOUSE',
      Label: 'Boarding House'
    },
    Penthouse: {
      ID: 'PENTHOUSE',
      Label: 'Penthouse'
    },
    StudioType: {
      ID: 'STUDIO_TYPE',
      Label: 'Studio-type'
    },
    LoftType: {
      ID: 'LOFT_TYPE',
      Label: 'Loft-type'
    },
    ServicedApartment: {
      ID: 'SERVICED_APARTMENT',
      Label: 'Serviced Apartment'
    },
    ServicedResidence: {
      ID: 'SERVICED_RESIDENCE',
      Label: 'Serviced Residence'
    }
  },
  CommercialGeneralPurpose: {
    ID: 'COMMERCIAL_GENERAL_PURPOSE',
    Label: 'Commercial - General Purpose',
    OfficeSpaces: {
      ID: 'OFFICE_SPACE',
      Label: 'Office Spaces'
    },
    CoworkingSpaces: {
      ID: 'CO_WORKING_SPACE',
      Label: 'Co-working Spaces'
    },
    MeetingSpaces: {
      ID: 'MEETING_SPACES',
      Label: 'Meeting Spaces'
    },
    ConferenceConventionSpaces: {
      ID: 'CONFERENCE_CONVENTION_SPACES',
      Label: 'Conference & Convention Spaces'
    },
    ServicedOffices: {
      ID: 'SERVICED_OFFICES',
      Label: 'Serviced Offices'
    }
  },
  CommercialRetailFoodRestaurant: {
    ID: 'COMMERCIAL_RETAIL_FOOD_RESTAURANT',
    Label: 'Commercial - Retail, Food & Restaurant',
    Exhibits: {
      ID: 'EXHIBITS',
      Label: 'Exhibits'
    },
    StoresShops: {
      ID: 'STORES_SHOPS',
      Label: 'Stores / Shops'
    },
    BoothsStalls: {
      ID: 'BOOTHS_STALLS',
      Label: 'Booths / Stalls'
    },
    CountersServicedStations: {
      ID: 'COUNTERS_SERVICE_STATIONS',
      Label: 'Counters / Service Stations'
    },
    Kiosks: {
      ID: 'KIOSKS',
      Label: 'Kiosks'
    },
    Carts: {
      ID: 'CARTS',
      Label: 'Carts'
    }
  },
  IndustrialManufacturing: {
    ID: 'INDUSTRIAL_MANUFACTURING',
    Label: 'Industrial - Manufacturing',
    HeavyManufacturing: {
      ID: 'HEAVY_MANUFACTURING',
      Label: 'Heavy Manufacturing'
    },
    LightAssembly: {
      ID: 'LIGHT_ASSEMBLY',
      Label: 'Light Assembly'
    }
  },
  IndustrialFlexSpaces: {
    ID: 'INDUSTIAL_FLEX_SPACES',
    Label: 'Industrial - Flex Spaces',
    ResearchAndDevelopmentCenters: {
      ID: 'RESEARCH_AND_DEVELOPMENT_CENTER',
      Label: 'Research & Development Centers'
    },
    TelecomAndDataHostingCenters: {
      ID: 'TELECOM_AND_DATA_HOSTING_CENTER',
      Label: 'Telecom & Data Hosting Centers'
    },
    BiohackingAndWetLabSpaces: {
      ID: 'BIOHACKING_AND_WET_LAB_SPACES',
      Label: 'Biohacking & Wet Lab Spaces'
    },
    Showrooms: {
      ID: 'SHOWROOMS',
      Label: 'Showrooms'
    }
  },
  IndustrialStorageDistribution: {
    ID: 'INDUSTIAL_STORAGE_DISTRIBUTION',
    Label: 'Industrial - Storage & Distribution',
    DistributionWarehouse: {
      ID: 'DISTRIBUTION_WAREHOUSE',
      Label: 'Distribution Warehouse'
    },
    GeneralPurposeWarehouse: {
      ID: 'GENERAL_PURPOSE_WAREHOUSE',
      Label: 'General Purpose Warehouse'
    },
    TruckTerminal: {
      ID: 'TRUCK_TERMINAL',
      Label: 'Truck Terminal'
    },
    RefrigerationAndColdStorage: {
      ID: 'REFRIGERATION_COLD_STORAGE',
      Label: 'Refrigeration & Cold Storage'
    }
  }
}

const RequestStatus = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};

export default {
  RequestStatus,
  ListingCategories,
  ListingSubCategories,
  PropertyTypes,
  PropertySubTypes
}
