const flightsWithoutReturn = {
  meta: {
    count: 38,
    links: {
      self: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2022-11-01&adults=1&nonStop=false&max=250',
    },
  },
  data: [
    {
      type: 'flight-offer',
      id: '1',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-07-24',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT19H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:15:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-02T00:30:00',
              },
              carrierCode: 'TR',
              number: '13',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT8H15M',
              id: '52',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-02T09:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                terminal: 'I',
                at: '2022-11-02T10:55:00',
              },
              carrierCode: 'TR',
              number: '606',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT2H25M',
              id: '53',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '325.01',
        base: '214.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '325.01',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['SQ'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '325.01',
            base: '214.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '52',
              cabin: 'ECONOMY',
              fareBasis: 'O2TR24',
              class: 'O',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '53',
              cabin: 'ECONOMY',
              fareBasis: 'H2TR24',
              class: 'H',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '2',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT14H15M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '13',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-01T19:20:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T21:50:00',
              },
              carrierCode: 'PR',
              number: '732',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H30M',
              id: '14',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '382.70',
        base: '263.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '382.70',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '382.70',
            base: '263.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '13',
              cabin: 'ECONOMY',
              fareBasis: 'EOBAU',
              class: 'E',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '14',
              cabin: 'ECONOMY',
              fareBasis: 'EOBAU',
              class: 'E',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '3',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT28H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '37',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-02T09:45:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T12:05:00',
              },
              carrierCode: 'PR',
              number: '730',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H20M',
              id: '38',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '382.70',
        base: '263.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '382.70',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '382.70',
            base: '263.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '37',
              cabin: 'ECONOMY',
              fareBasis: 'EOBAU',
              class: 'E',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '38',
              cabin: 'ECONOMY',
              fareBasis: 'EOBAU',
              class: 'E',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '4',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT33H10M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '9',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-02T14:25:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T16:45:00',
              },
              carrierCode: 'PR',
              number: '736',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H20M',
              id: '10',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '382.70',
        base: '263.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '382.70',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '382.70',
            base: '263.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '9',
              cabin: 'ECONOMY',
              fareBasis: 'EOBAU',
              class: 'E',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '10',
              cabin: 'ECONOMY',
              fareBasis: 'EOBAU',
              class: 'E',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '5',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-25',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT9H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T10:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T15:25:00',
              },
              carrierCode: 'TG',
              number: '476',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT9H25M',
              id: '21',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '406.82',
        base: '344.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '406.82',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['TG'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '406.82',
            base: '344.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '21',
              cabin: 'ECONOMY',
              fareBasis: 'VOWOSV',
              class: 'V',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '6',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT14H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T07:35:00',
              },
              arrival: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-01T15:00:00',
              },
              carrierCode: 'CX',
              number: '110',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT10H25M',
              id: '22',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-01T15:55:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T18:00:00',
              },
              carrierCode: 'CX',
              number: '701',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT3H5M',
              id: '23',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '434.45',
        base: '126.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '434.45',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CX'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '434.45',
            base: '126.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '22',
              cabin: 'ECONOMY',
              fareBasis: 'SR21AUIO',
              class: 'S',
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: '23',
              cabin: 'ECONOMY',
              fareBasis: 'SR21AUIO',
              brandedFare: 'ECONLIGHT',
              class: 'S',
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '7',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT30H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T07:35:00',
              },
              arrival: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-01T15:00:00',
              },
              carrierCode: 'CX',
              number: '110',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT10H25M',
              id: '26',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-02T08:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T10:00:00',
              },
              carrierCode: 'CX',
              number: '705',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT3H',
              id: '27',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '449.72',
        base: '126.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '449.72',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CX'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '449.72',
            base: '126.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '26',
              cabin: 'ECONOMY',
              fareBasis: 'SR21AUIO',
              class: 'S',
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: '27',
              cabin: 'ECONOMY',
              fareBasis: 'SR21AUIO',
              brandedFare: 'ECONLIGHT',
              class: 'S',
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '8',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT34H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T07:35:00',
              },
              arrival: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-01T15:00:00',
              },
              carrierCode: 'CX',
              number: '110',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT10H25M',
              id: '28',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-02T12:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T14:00:00',
              },
              carrierCode: 'CX',
              number: '653',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT3H',
              id: '29',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '449.72',
        base: '126.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '449.72',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CX'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '449.72',
            base: '126.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '28',
              cabin: 'ECONOMY',
              fareBasis: 'SR21AUIO',
              class: 'S',
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: '29',
              cabin: 'ECONOMY',
              fareBasis: 'SR21AUIO',
              brandedFare: 'ECONLIGHT',
              class: 'S',
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '9',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT17H',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T07:35:00',
              },
              arrival: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-01T15:00:00',
              },
              carrierCode: 'CX',
              number: '110',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT10H25M',
              id: '1',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-01T18:35:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T20:35:00',
              },
              carrierCode: 'CX',
              number: '703',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT3H',
              id: '2',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '490.45',
        base: '182.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '490.45',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CX'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '490.45',
            base: '182.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '1',
              cabin: 'ECONOMY',
              fareBasis: 'VR21AUIO',
              class: 'V',
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: '2',
              cabin: 'ECONOMY',
              fareBasis: 'VR21AUIO',
              brandedFare: 'ECONLIGHT',
              class: 'V',
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '10',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT31H20M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T07:35:00',
              },
              arrival: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-01T15:00:00',
              },
              carrierCode: 'CX',
              number: '110',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT10H25M',
              id: '17',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HKG',
                terminal: '1',
                at: '2022-11-02T09:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T10:55:00',
              },
              carrierCode: 'CX',
              number: '717',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CX',
              },
              duration: 'PT2H55M',
              id: '18',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '505.72',
        base: '182.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '505.72',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CX'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '505.72',
            base: '182.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '17',
              cabin: 'ECONOMY',
              fareBasis: 'VR21AUIO',
              class: 'V',
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: '18',
              cabin: 'ECONOMY',
              fareBasis: 'VR21AUIO',
              brandedFare: 'ECONLIGHT',
              class: 'V',
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '11',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-08-06',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT9H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T10:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T16:10:00',
              },
              carrierCode: 'QF',
              number: '23',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'QF',
              },
              duration: 'PT9H40M',
              id: '47',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '607.83',
        base: '525.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '607.83',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QF'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '607.83',
            base: '525.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '47',
              cabin: 'ECONOMY',
              fareBasis: 'SLATDO',
              class: 'S',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '12',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-25',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT12H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T21:00:00',
              },
              carrierCode: 'TG',
              number: '478',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT12H30M',
              stops: [
                {
                  iataCode: 'HKT',
                  duration: 'PT1H30M',
                  arrivalAt: '2022-11-01T18:00:00',
                  departureAt: '2022-11-01T19:30:00',
                },
              ],
              id: '30',
              numberOfStops: 1,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '621.82',
        base: '559.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '621.82',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['TG'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '621.82',
            base: '559.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '30',
              cabin: 'ECONOMY',
              fareBasis: 'QOWOSV',
              class: 'Q',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '13',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT15H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:10:00',
              },
              arrival: {
                iataCode: 'TPE',
                terminal: '2',
                at: '2022-11-02T04:30:00',
              },
              carrierCode: 'CI',
              number: '52',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT9H20M',
              id: '50',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'TPE',
                terminal: '1',
                at: '2022-11-02T07:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T09:50:00',
              },
              carrierCode: 'CI',
              number: '833',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT3H50M',
              id: '51',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1476.90',
        base: '1348.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1476.90',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CI'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1476.90',
            base: '1348.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '50',
              cabin: 'ECONOMY',
              fareBasis: 'YLOAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '51',
              cabin: 'ECONOMY',
              fareBasis: 'YLOAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '14',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT18H55M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:10:00',
              },
              arrival: {
                iataCode: 'TPE',
                terminal: '2',
                at: '2022-11-02T04:30:00',
              },
              carrierCode: 'CI',
              number: '52',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT9H20M',
              id: '72',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'TPE',
                terminal: '1',
                at: '2022-11-02T10:05:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T13:05:00',
              },
              carrierCode: 'CI',
              number: '831',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT4H',
              id: '73',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1476.90',
        base: '1348.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1476.90',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CI'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1476.90',
            base: '1348.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '72',
              cabin: 'ECONOMY',
              fareBasis: 'YLOAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '73',
              cabin: 'ECONOMY',
              fareBasis: 'YLOAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '15',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT22H35M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:10:00',
              },
              arrival: {
                iataCode: 'TPE',
                terminal: '2',
                at: '2022-11-02T04:30:00',
              },
              carrierCode: 'CI',
              number: '52',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT9H20M',
              id: '41',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'TPE',
                terminal: '1',
                at: '2022-11-02T13:50:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T16:45:00',
              },
              carrierCode: 'CI',
              number: '835',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT3H55M',
              id: '42',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1476.90',
        base: '1348.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1476.90',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CI'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1476.90',
            base: '1348.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '41',
              cabin: 'ECONOMY',
              fareBasis: 'YLOAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '42',
              cabin: 'ECONOMY',
              fareBasis: 'YLOAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '16',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT24H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:00:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-02T04:50:00',
              },
              carrierCode: 'QR',
              number: '909',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H50M',
              id: '35',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-02T08:10:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T18:30:00',
              },
              carrierCode: 'QR',
              number: '838',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT6H20M',
              id: '36',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '2366.16',
        base: '1865.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '2366.16',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '2366.16',
            base: '1865.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '35',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FI',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '36',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FI',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '17',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT36H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:00:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-02T04:50:00',
              },
              carrierCode: 'QR',
              number: '909',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H50M',
              id: '39',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-02T20:10:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T06:30:00',
              },
              carrierCode: 'QR',
              number: '830',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT6H20M',
              id: '40',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '2369.76',
        base: '1865.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '2369.76',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '2369.76',
            base: '1865.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '39',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FI',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '40',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FI',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '18',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT42H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:00:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-02T04:50:00',
              },
              carrierCode: 'QR',
              number: '909',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H50M',
              id: '56',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-03T02:20:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T12:40:00',
              },
              carrierCode: 'QR',
              number: '36',
              aircraft: {
                code: '77L',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT6H20M',
              id: '57',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '2369.76',
        base: '1865.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '2369.76',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '2369.76',
            base: '1865.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '56',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FI',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '57',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FI',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '19',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT11H45M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T12:15:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-01T17:35:00',
              },
              carrierCode: 'SQ',
              number: '232',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H20M',
              id: '58',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-01T18:35:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T20:00:00',
              },
              carrierCode: 'SQ',
              number: '720',
              aircraft: {
                code: '787',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT2H25M',
              id: '59',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '2425.77',
        base: '2341.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '2425.77',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['SQ'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '2425.77',
            base: '2341.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '58',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '59',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '20',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT11H55M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T09:05:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-01T14:15:00',
              },
              carrierCode: 'SQ',
              number: '212',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H10M',
              id: '68',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-01T15:25:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T17:00:00',
              },
              carrierCode: 'SQ',
              number: '712',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT2H35M',
              id: '69',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '2425.77',
        base: '2341.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '2425.77',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['SQ'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '2425.77',
            base: '2341.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '68',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '69',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      PVG: {
        cityCode: 'SHA',
        countryCode: 'CN',
      },
      BKK: {
        cityCode: 'BKK',
        countryCode: 'TH',
      },
      AUH: {
        cityCode: 'AUH',
        countryCode: 'AE',
      },
      HKG: {
        cityCode: 'HKG',
        countryCode: 'HK',
      },
      TPE: {
        cityCode: 'TPE',
        countryCode: 'TW',
      },
      SIN: {
        cityCode: 'SIN',
        countryCode: 'SG',
      },
      MNL: {
        cityCode: 'MNL',
        countryCode: 'PH',
      },
      DOH: {
        cityCode: 'DOH',
        countryCode: 'QA',
      },
      SYD: {
        cityCode: 'SYD',
        countryCode: 'AU',
      },
      HND: {
        cityCode: 'TYO',
        countryCode: 'JP',
      },
    },
    aircraft: {
      320: 'AIRBUS A320',
      321: 'AIRBUS A321',
      333: 'AIRBUS A330-300',
      359: 'AIRBUS A350-900',
      388: 'AIRBUS A380-800',
      781: 'BOEING 787-10',
      787: '787  ALL SERIES PASSENGER',
      788: 'BOEING 787-8',
      789: 'BOEING 787-9',
      '77W': 'BOEING 777-300ER',
      '77L': 'BOEING 777-200LR',
    },
    currencies: {
      EUR: 'EURO',
    },
    carriers: {
      QR: 'QATAR AIRWAYS',
      PR: 'PHILIPPINE AIRLINES',
      TG: 'THAI AIRWAYS INTERNATIONAL',
      EY: 'ETIHAD AIRWAYS',
      CX: 'CATHAY PACIFIC',
      QF: 'QANTAS AIRWAYS',
      CI: 'CHINA AIRLINES LTD.',
      MU: 'CHINA EASTERN AIRLINES',
      NH: 'ALL NIPPON AIRWAYS',
      TR: 'SCOOT',
      SQ: 'SINGAPORE AIRLINES',
    },
  },
}

const flightsWithReturn = {
  meta: {
    count: 81,
    links: {
      self: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2022-11-01&returnDate=2022-11-09&adults=1&nonStop=false&max=250',
    },
  },
  data: [
    {
      type: 'flight-offer',
      id: '1',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT14H15M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '7',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-01T19:20:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T21:50:00',
              },
              carrierCode: 'PR',
              number: '732',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H30M',
              id: '8',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT30H55M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T22:50:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-10T03:15:00',
              },
              carrierCode: 'PR',
              number: '733',
              aircraft: {
                code: '320',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H25M',
              id: '79',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-10T22:10:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-11T09:45:00',
              },
              carrierCode: 'PR',
              number: '211',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H35M',
              id: '80',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '622.18',
        base: '404.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '622.18',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '622.18',
            base: '404.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '7',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '8',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '79',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '80',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '2',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT14H15M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '7',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-01T19:20:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T21:50:00',
              },
              carrierCode: 'PR',
              number: '732',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H30M',
              id: '8',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT35H50M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T17:55:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-09T22:25:00',
              },
              carrierCode: 'PR',
              number: '737',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H30M',
              id: '74',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-10T22:10:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-11T09:45:00',
              },
              carrierCode: 'PR',
              number: '211',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H35M',
              id: '75',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '622.18',
        base: '404.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '622.18',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '622.18',
            base: '404.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '7',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '8',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '74',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '75',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '3',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT28H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '19',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-02T09:45:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T12:05:00',
              },
              carrierCode: 'PR',
              number: '730',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H20M',
              id: '20',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT30H55M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T22:50:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-10T03:15:00',
              },
              carrierCode: 'PR',
              number: '733',
              aircraft: {
                code: '320',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H25M',
              id: '79',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-10T22:10:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-11T09:45:00',
              },
              carrierCode: 'PR',
              number: '211',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H35M',
              id: '80',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '622.18',
        base: '404.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '622.18',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '622.18',
            base: '404.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '19',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '20',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '79',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '80',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '4',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT33H10M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '5',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-02T14:25:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T16:45:00',
              },
              carrierCode: 'PR',
              number: '736',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H20M',
              id: '6',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT30H55M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T22:50:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-10T03:15:00',
              },
              carrierCode: 'PR',
              number: '733',
              aircraft: {
                code: '320',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H25M',
              id: '79',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-10T22:10:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-11T09:45:00',
              },
              carrierCode: 'PR',
              number: '211',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H35M',
              id: '80',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '622.18',
        base: '404.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '622.18',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '622.18',
            base: '404.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '5',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '6',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '79',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '80',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '5',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT28H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '19',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-02T09:45:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T12:05:00',
              },
              carrierCode: 'PR',
              number: '730',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H20M',
              id: '20',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT35H50M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T17:55:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-09T22:25:00',
              },
              carrierCode: 'PR',
              number: '737',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H30M',
              id: '74',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-10T22:10:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-11T09:45:00',
              },
              carrierCode: 'PR',
              number: '211',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H35M',
              id: '75',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '622.18',
        base: '404.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '622.18',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '622.18',
            base: '404.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '19',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '20',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '74',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '75',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '6',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT33H10M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:35:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-01T16:50:00',
              },
              carrierCode: 'PR',
              number: '212',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H15M',
              id: '5',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-02T14:25:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T16:45:00',
              },
              carrierCode: 'PR',
              number: '736',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H20M',
              id: '6',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT35H50M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T17:55:00',
              },
              arrival: {
                iataCode: 'MNL',
                terminal: '2',
                at: '2022-11-09T22:25:00',
              },
              carrierCode: 'PR',
              number: '737',
              aircraft: {
                code: '321',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT3H30M',
              id: '74',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'MNL',
                terminal: '1',
                at: '2022-11-10T22:10:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-11T09:45:00',
              },
              carrierCode: 'PR',
              number: '211',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'PR',
              },
              duration: 'PT8H35M',
              id: '75',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '622.18',
        base: '404.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '622.18',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['PR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '622.18',
            base: '404.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '5',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '6',
              cabin: 'ECONOMY',
              fareBasis: 'TBAU',
              class: 'T',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '74',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '75',
              cabin: 'ECONOMY',
              fareBasis: 'KBAU',
              class: 'K',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '7',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-07-25',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT19H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:15:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-02T00:30:00',
              },
              carrierCode: 'TR',
              number: '13',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT8H15M',
              id: '29',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-02T09:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                terminal: 'I',
                at: '2022-11-02T10:55:00',
              },
              carrierCode: 'TR',
              number: '606',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT2H25M',
              id: '30',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT21H5M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                terminal: 'I',
                at: '2022-11-09T11:55:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-09T15:35:00',
              },
              carrierCode: 'TR',
              number: '607',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT2H40M',
              id: '47',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-10T02:00:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T13:00:00',
              },
              carrierCode: 'TR',
              number: '2',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT8H',
              id: '48',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '660.74',
        base: '416.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '660.74',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['HR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '660.74',
            base: '416.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '29',
              cabin: 'ECONOMY',
              fareBasis: 'O2TR24',
              class: 'O',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '30',
              cabin: 'ECONOMY',
              fareBasis: 'H2TR24',
              class: 'H',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '47',
              cabin: 'ECONOMY',
              fareBasis: 'W2TR24',
              class: 'W',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '48',
              cabin: 'ECONOMY',
              fareBasis: 'O2TR24',
              class: 'O',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '8',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-07-25',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT19H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:15:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-02T00:30:00',
              },
              carrierCode: 'TR',
              number: '13',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT8H15M',
              id: '29',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-02T09:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                terminal: 'I',
                at: '2022-11-02T10:55:00',
              },
              carrierCode: 'TR',
              number: '606',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT2H25M',
              id: '30',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT26H15M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                terminal: 'I',
                at: '2022-11-09T11:55:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-09T15:35:00',
              },
              carrierCode: 'TR',
              number: '607',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT2H40M',
              id: '51',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '1',
                at: '2022-11-10T07:15:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T18:10:00',
              },
              carrierCode: 'TR',
              number: '12',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'TR',
              },
              duration: 'PT7H55M',
              id: '52',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '660.74',
        base: '416.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '660.74',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['HR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '660.74',
            base: '416.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '29',
              cabin: 'ECONOMY',
              fareBasis: 'O2TR24',
              class: 'O',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '30',
              cabin: 'ECONOMY',
              fareBasis: 'H2TR24',
              class: 'H',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '51',
              cabin: 'ECONOMY',
              fareBasis: 'W2TR24',
              class: 'W',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '52',
              cabin: 'ECONOMY',
              fareBasis: 'O2TR24',
              class: 'O',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '9',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-04',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT9H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T10:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T15:25:00',
              },
              carrierCode: 'TG',
              number: '476',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT9H25M',
              id: '11',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT9H20M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T17:50:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T07:10:00',
              },
              carrierCode: 'TG',
              number: '475',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT9H20M',
              id: '53',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '712.42',
        base: '608.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '712.42',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['TG'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '712.42',
            base: '608.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '11',
              cabin: 'ECONOMY',
              fareBasis: 'W6LASV',
              class: 'W',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '53',
              cabin: 'ECONOMY',
              fareBasis: 'W6LASV',
              class: 'W',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '10',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-07-27',
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: 'PT9H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T10:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T16:10:00',
              },
              carrierCode: 'EK',
              number: '5023',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'QF',
              },
              duration: 'PT9H40M',
              id: '23',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT9H35M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T18:00:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T07:35:00',
              },
              carrierCode: 'EK',
              number: '5024',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'QF',
              },
              duration: 'PT9H35M',
              id: '64',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '715.44',
        base: '593.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '715.44',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['EK'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '715.44',
            base: '593.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '23',
              cabin: 'ECONOMY',
              fareBasis: 'LLENPAU1',
              brandedFare: 'ECOSAVER',
              class: 'L',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '64',
              cabin: 'ECONOMY',
              fareBasis: 'LLENPAU1',
              brandedFare: 'ECOSAVER',
              class: 'L',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '11',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-08-07',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT9H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T10:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T16:10:00',
              },
              carrierCode: 'QF',
              number: '23',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'QF',
              },
              duration: 'PT9H40M',
              id: '24',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT9H35M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T18:00:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T07:35:00',
              },
              carrierCode: 'QF',
              number: '24',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'QF',
              },
              duration: 'PT9H35M',
              id: '65',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '952.44',
        base: '808.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '952.44',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QF'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '952.44',
            base: '808.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '24',
              cabin: 'ECONOMY',
              fareBasis: 'SLATD',
              class: 'S',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '65',
              cabin: 'ECONOMY',
              fareBasis: 'SLATD',
              class: 'S',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '12',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-25',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT9H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T10:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T15:25:00',
              },
              carrierCode: 'TG',
              number: '476',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT9H25M',
              id: '11',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT9H55M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T07:35:00',
              },
              arrival: {
                iataCode: 'SYD',
                at: '2022-11-09T21:30:00',
              },
              carrierCode: 'TG',
              number: '477',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT9H55M',
              stops: [
                {
                  iataCode: 'HKT',
                  duration: 'PT1H10M',
                  arrivalAt: '2022-11-09T09:05:00',
                  departureAt: '2022-11-09T10:15:00',
                },
              ],
              id: '76',
              numberOfStops: 1,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1006.42',
        base: '902.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1006.42',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['TG'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1006.42',
            base: '902.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '11',
              cabin: 'ECONOMY',
              fareBasis: 'V6LRSV',
              class: 'V',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '76',
              cabin: 'ECONOMY',
              fareBasis: 'Q1LRSV',
              class: 'Q',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '13',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-09-30',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT9H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T10:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T15:25:00',
              },
              carrierCode: 'TG',
              number: '476',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT9H25M',
              id: '11',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT9H45M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T07:45:00',
              },
              arrival: {
                iataCode: 'HKT',
                terminal: 'D',
                at: '2022-11-09T09:10:00',
              },
              carrierCode: 'TG',
              number: '2201',
              aircraft: {
                code: '320',
              },
              operating: {
                carrierCode: 'WE',
              },
              duration: 'PT1H25M',
              id: '66',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HKT',
                terminal: '1',
                at: '2022-11-09T10:15:00',
              },
              arrival: {
                iataCode: 'SYD',
                at: '2022-11-09T21:30:00',
              },
              carrierCode: 'TG',
              number: '477',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT7H15M',
              id: '67',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1038.42',
        base: '934.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1038.42',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['TG'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1038.42',
            base: '934.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '11',
              cabin: 'ECONOMY',
              fareBasis: 'V6LRSV',
              class: 'V',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '66',
              cabin: 'ECONOMY',
              fareBasis: 'W1XYOWE',
              class: 'W',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '67',
              cabin: 'ECONOMY',
              fareBasis: 'Q1LRSV',
              class: 'Q',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '14',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-25',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT12H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T11:30:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T21:00:00',
              },
              carrierCode: 'TG',
              number: '478',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT12H30M',
              stops: [
                {
                  iataCode: 'HKT',
                  duration: 'PT1H30M',
                  arrivalAt: '2022-11-01T18:00:00',
                  departureAt: '2022-11-01T19:30:00',
                },
              ],
              id: '14',
              numberOfStops: 1,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT9H55M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T07:35:00',
              },
              arrival: {
                iataCode: 'SYD',
                at: '2022-11-09T21:30:00',
              },
              carrierCode: 'TG',
              number: '477',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT9H55M',
              stops: [
                {
                  iataCode: 'HKT',
                  duration: 'PT1H10M',
                  arrivalAt: '2022-11-09T09:05:00',
                  departureAt: '2022-11-09T10:15:00',
                },
              ],
              id: '76',
              numberOfStops: 1,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1221.42',
        base: '1117.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1221.42',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['TG'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1221.42',
            base: '1117.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '14',
              cabin: 'ECONOMY',
              fareBasis: 'Q1LRSV',
              class: 'Q',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '76',
              cabin: 'ECONOMY',
              fareBasis: 'Q1LRSV',
              class: 'Q',
              includedCheckedBags: {
                weight: 20,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '15',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT15H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:10:00',
              },
              arrival: {
                iataCode: 'TPE',
                terminal: '2',
                at: '2022-11-02T04:30:00',
              },
              carrierCode: 'CI',
              number: '52',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT9H20M',
              id: '27',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'TPE',
                terminal: '1',
                at: '2022-11-02T07:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T09:50:00',
              },
              carrierCode: 'CI',
              number: '833',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT3H50M',
              id: '28',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT14H25M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T17:50:00',
              },
              arrival: {
                iataCode: 'TPE',
                terminal: '1',
                at: '2022-11-09T22:25:00',
              },
              carrierCode: 'CI',
              number: '836',
              aircraft: {
                code: '333',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT3H35M',
              id: '54',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'TPE',
                terminal: '2',
                at: '2022-11-09T23:55:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T12:15:00',
              },
              carrierCode: 'CI',
              number: '51',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'CI',
              },
              duration: 'PT9H20M',
              id: '55',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1718.61',
        base: '1502.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1718.61',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['CI'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1718.61',
            base: '1502.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '27',
              cabin: 'ECONOMY',
              fareBasis: 'YLAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '28',
              cabin: 'ECONOMY',
              fareBasis: 'YLAU',
              class: 'Y',
              includedCheckedBags: {
                weight: 45,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '54',
              cabin: 'ECONOMY',
              fareBasis: 'TLAU',
              class: 'T',
              includedCheckedBags: {
                weight: 40,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '55',
              cabin: 'ECONOMY',
              fareBasis: 'TLAU',
              class: 'T',
              includedCheckedBags: {
                weight: 40,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '16',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-07-27',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT20H45M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T12:25:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-01T20:00:00',
              },
              carrierCode: 'NH',
              number: '890',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '37',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                at: '2022-11-02T00:05:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T05:10:00',
              },
              carrierCode: 'NH',
              number: '849',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT7H5M',
              id: '38',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT17H25M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T22:50:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-10T06:30:00',
              },
              carrierCode: 'NH',
              number: '850',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT5H40M',
              id: '58',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                at: '2022-11-10T08:40:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T20:15:00',
              },
              carrierCode: 'NH',
              number: '889',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '59',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '1724.58',
        base: '727.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '1724.58',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['NH'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '1724.58',
            base: '727.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '37',
              cabin: 'ECONOMY',
              fareBasis: 'SRFQ0',
              class: 'S',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '38',
              cabin: 'ECONOMY',
              fareBasis: 'SNCT1',
              class: 'S',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '58',
              cabin: 'ECONOMY',
              fareBasis: 'SNCT1',
              class: 'S',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '59',
              cabin: 'ECONOMY',
              fareBasis: 'SRFQ0',
              class: 'S',
              includedCheckedBags: {
                quantity: 2,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '17',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-07-27',
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: 'PT21H',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T12:25:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-01T20:00:00',
              },
              carrierCode: 'NH',
              number: '890',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '3',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                terminal: '3',
                at: '2022-11-02T00:20:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T05:25:00',
              },
              carrierCode: 'NH',
              number: '5965',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT7H5M',
              id: '4',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT17H25M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T22:50:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-10T06:30:00',
              },
              carrierCode: 'NH',
              number: '850',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT5H40M',
              id: '58',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                at: '2022-11-10T08:40:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T20:15:00',
              },
              carrierCode: 'NH',
              number: '889',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '59',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '2424.58',
        base: '1427.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '2424.58',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['NH'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '2424.58',
            base: '1427.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '3',
              cabin: 'ECONOMY',
              fareBasis: 'SRFQ0',
              class: 'S',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '4',
              cabin: 'ECONOMY',
              fareBasis: 'MXRCT1',
              class: 'M',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '58',
              cabin: 'ECONOMY',
              fareBasis: 'SRCT1',
              class: 'S',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '59',
              cabin: 'ECONOMY',
              fareBasis: 'SRFQ0',
              class: 'S',
              includedCheckedBags: {
                quantity: 2,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '18',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT24H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:00:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-02T04:50:00',
              },
              carrierCode: 'QR',
              number: '909',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H50M',
              id: '17',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-02T08:10:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T18:30:00',
              },
              carrierCode: 'QR',
              number: '838',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT6H20M',
              id: '18',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT29H25M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T09:20:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-09T12:45:00',
              },
              carrierCode: 'QR',
              number: '831',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT7H25M',
              id: '60',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-09T20:40:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T18:45:00',
              },
              carrierCode: 'QR',
              number: '908',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H5M',
              id: '61',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '3852.10',
        base: '2871.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '3852.10',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '3852.10',
            base: '2871.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '17',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '18',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '60',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '61',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '19',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT36H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:00:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-02T04:50:00',
              },
              carrierCode: 'QR',
              number: '909',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H50M',
              id: '21',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-02T20:10:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T06:30:00',
              },
              carrierCode: 'QR',
              number: '830',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT6H20M',
              id: '22',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT29H25M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T09:20:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-09T12:45:00',
              },
              carrierCode: 'QR',
              number: '831',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT7H25M',
              id: '60',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-09T20:40:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T18:45:00',
              },
              carrierCode: 'QR',
              number: '908',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H5M',
              id: '61',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '3855.70',
        base: '2871.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '3855.70',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '3855.70',
            base: '2871.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '21',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '22',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '60',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '61',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'flight-offer',
      id: '20',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT42H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T22:00:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-02T04:50:00',
              },
              carrierCode: 'QR',
              number: '909',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H50M',
              id: '31',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-03T02:20:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T12:40:00',
              },
              carrierCode: 'QR',
              number: '36',
              aircraft: {
                code: '77L',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT6H20M',
              id: '32',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: 'PT29H25M',
          segments: [
            {
              departure: {
                iataCode: 'BKK',
                at: '2022-11-09T09:20:00',
              },
              arrival: {
                iataCode: 'DOH',
                at: '2022-11-09T12:45:00',
              },
              carrierCode: 'QR',
              number: '831',
              aircraft: {
                code: '788',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT7H25M',
              id: '60',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'DOH',
                at: '2022-11-09T20:40:00',
              },
              arrival: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-10T18:45:00',
              },
              carrierCode: 'QR',
              number: '908',
              aircraft: {
                code: '388',
              },
              operating: {
                carrierCode: 'QR',
              },
              duration: 'PT14H5M',
              id: '61',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '3855.70',
        base: '2871.00',
        fees: [
          {
            amount: '0.00',
            type: 'SUPPLIER',
          },
          {
            amount: '0.00',
            type: 'TICKETING',
          },
        ],
        grandTotal: '3855.70',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['QR'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '3855.70',
            base: '2871.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '31',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '32',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '60',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '61',
              cabin: 'ECONOMY',
              fareBasis: 'HJAUR1FE',
              brandedFare: 'ECOMFORT',
              class: 'H',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
          ],
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      PVG: {
        cityCode: 'SHA',
        countryCode: 'CN',
      },
      HKT: {
        cityCode: 'HKT',
        countryCode: 'TH',
      },
      BKK: {
        cityCode: 'BKK',
        countryCode: 'TH',
      },
      TPE: {
        cityCode: 'TPE',
        countryCode: 'TW',
      },
      SIN: {
        cityCode: 'SIN',
        countryCode: 'SG',
      },
      MNL: {
        cityCode: 'MNL',
        countryCode: 'PH',
      },
      DOH: {
        cityCode: 'DOH',
        countryCode: 'QA',
      },
      SYD: {
        cityCode: 'SYD',
        countryCode: 'AU',
      },
      HND: {
        cityCode: 'TYO',
        countryCode: 'JP',
      },
    },
    aircraft: {
      320: 'AIRBUS A320',
      321: 'AIRBUS A321',
      333: 'AIRBUS A330-300',
      359: 'AIRBUS A350-900',
      388: 'AIRBUS A380-800',
      787: '787  ALL SERIES PASSENGER',
      788: 'BOEING 787-8',
      789: 'BOEING 787-9',
      '77W': 'BOEING 777-300ER',
      '77L': 'BOEING 777-200LR',
    },
    currencies: {
      EUR: 'EURO',
    },
    carriers: {
      QR: 'QATAR AIRWAYS',
      PR: 'PHILIPPINE AIRLINES',
      TG: 'THAI AIRWAYS INTERNATIONAL',
      QF: 'QANTAS AIRWAYS',
      EK: 'EMIRATES',
      CI: 'CHINA AIRLINES LTD.',
      MU: 'CHINA EASTERN AIRLINES',
      NH: 'ALL NIPPON AIRWAYS',
      TR: 'SCOOT',
      WE: 'THAI SMILE AIRWAYS',
      SQ: 'SINGAPORE AIRLINES',
    },
  },
}

export { flightsWithReturn, flightsWithoutReturn }
