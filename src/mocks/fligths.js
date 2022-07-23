export const flights = {
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
    {
      type: 'flight-offer',
      id: '21',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT13H40M',
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
              id: '48',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-01T17:10:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-01T18:45:00',
              },
              carrierCode: 'SQ',
              number: '714',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT2H35M',
              id: '49',
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
              segmentId: '48',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '49',
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
      id: '22',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT14H55M',
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
              id: '70',
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
              id: '71',
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
              segmentId: '70',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '71',
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
      id: '23',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT17H30M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:10:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-02T00:20:00',
              },
              carrierCode: 'SQ',
              number: '242',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H10M',
              id: '31',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-02T07:15:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T08:40:00',
              },
              carrierCode: 'SQ',
              number: '706',
              aircraft: {
                code: '787',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT2H25M',
              id: '32',
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
              segmentId: '31',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '32',
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
      id: '24',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT20H',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:10:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-02T00:20:00',
              },
              carrierCode: 'SQ',
              number: '242',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H10M',
              id: '3',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-02T09:45:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T11:10:00',
              },
              carrierCode: 'SQ',
              number: '708',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT2H25M',
              id: '4',
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
              segmentId: '3',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '4',
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
      id: '25',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT23H25M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:10:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-02T00:20:00',
              },
              carrierCode: 'SQ',
              number: '242',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H10M',
              id: '24',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-02T13:05:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T14:35:00',
              },
              carrierCode: 'SQ',
              number: '710',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT2H30M',
              id: '25',
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
              segmentId: '24',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '25',
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
      id: '26',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT25H50M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:10:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-02T00:20:00',
              },
              carrierCode: 'SQ',
              number: '242',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H10M',
              id: '62',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-02T15:25:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T17:00:00',
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
              id: '63',
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
              segmentId: '62',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '63',
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
      id: '27',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT27H35M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:10:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-02T00:20:00',
              },
              carrierCode: 'SQ',
              number: '242',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H10M',
              id: '43',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-02T17:10:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T18:45:00',
              },
              carrierCode: 'SQ',
              number: '714',
              aircraft: {
                code: '359',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT2H35M',
              id: '44',
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
              segmentId: '43',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '44',
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
      id: '28',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT28H50M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T19:10:00',
              },
              arrival: {
                iataCode: 'SIN',
                terminal: '0',
                at: '2022-11-02T00:20:00',
              },
              carrierCode: 'SQ',
              number: '242',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'SQ',
              },
              duration: 'PT8H10M',
              id: '64',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'SIN',
                terminal: '3',
                at: '2022-11-02T18:35:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T20:00:00',
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
              id: '65',
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
              segmentId: '64',
              cabin: 'ECONOMY',
              fareBasis: 'YIFSQ',
              class: 'Y',
              includedCheckedBags: {
                weight: 30,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '65',
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
      id: '29',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 6,
      itineraries: [
        {
          duration: 'PT28H20M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T12:00:00',
              },
              arrival: {
                iataCode: 'PVG',
                terminal: '2',
                at: '2022-11-01T19:30:00',
              },
              carrierCode: 'MU',
              number: '562',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'MU',
              },
              duration: 'PT10H30M',
              id: '15',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'PVG',
                terminal: '1',
                at: '2022-11-02T08:45:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T12:20:00',
              },
              carrierCode: 'MU',
              number: '541',
              aircraft: {
                code: '320',
              },
              operating: {
                carrierCode: 'MU',
              },
              duration: 'PT4H35M',
              id: '16',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6249.36',
        base: '6053.00',
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
        grandTotal: '6249.36',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['MU'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '6249.36',
            base: '6053.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '15',
              cabin: 'ECONOMY',
              fareBasis: 'YSE0WDNQ',
              class: 'Y',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '16',
              cabin: 'BUSINESS',
              fareBasis: 'QSE0WCNL',
              class: 'Q',
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
      id: '30',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
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
              id: '60',
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
              id: '61',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6292.40',
        base: '5783.00',
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
        grandTotal: '6292.40',
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
            total: '6292.40',
            base: '5783.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '60',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '61',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '31',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT21H30M',
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
              id: '33',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                at: '2022-11-02T00:50:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T05:55:00',
              },
              carrierCode: 'NH',
              number: '877',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT7H5M',
              id: '34',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6292.40',
        base: '5783.00',
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
        grandTotal: '6292.40',
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
            total: '6292.40',
            base: '5783.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '33',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '34',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '32',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT35H35M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T21:35:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-02T05:10:00',
              },
              carrierCode: 'NH',
              number: '880',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '45',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                at: '2022-11-03T00:05:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T05:10:00',
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
              id: '46',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6292.40',
        base: '5783.00',
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
        grandTotal: '6292.40',
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
            total: '6292.40',
            base: '5783.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '45',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '46',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '33',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT36H20M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T21:35:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-02T05:10:00',
              },
              carrierCode: 'NH',
              number: '880',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '19',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                at: '2022-11-03T00:50:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T05:55:00',
              },
              carrierCode: 'NH',
              number: '877',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT7H5M',
              id: '20',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6292.40',
        base: '5783.00',
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
        grandTotal: '6292.40',
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
            total: '6292.40',
            base: '5783.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '19',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '20',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '34',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: 'PT22H5M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T21:35:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-02T05:10:00',
              },
              carrierCode: 'NH',
              number: '880',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '7',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                terminal: '3',
                at: '2022-11-02T10:35:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T15:40:00',
              },
              carrierCode: 'NH',
              number: '5599',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'TG',
              },
              duration: 'PT7H5M',
              id: '8',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6292.40',
        base: '5783.00',
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
        grandTotal: '6292.40',
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
            total: '6292.40',
            base: '5783.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '7',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '8',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '35',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
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
              id: '5',
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
              id: '6',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6346.40',
        base: '5837.00',
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
        grandTotal: '6346.40',
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
            total: '6346.40',
            base: '5837.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '5',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '6',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '36',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: 'PT35H50M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T21:35:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-02T05:10:00',
              },
              carrierCode: 'NH',
              number: '880',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '66',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                terminal: '3',
                at: '2022-11-03T00:20:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T05:25:00',
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
              id: '67',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6346.40',
        base: '5837.00',
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
        grandTotal: '6346.40',
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
            total: '6346.40',
            base: '5837.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '66',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '67',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '37',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-10-19',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT22H40M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T21:35:00',
              },
              arrival: {
                iataCode: 'HND',
                at: '2022-11-02T05:10:00',
              },
              carrierCode: 'NH',
              number: '880',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT9H35M',
              id: '54',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'HND',
                at: '2022-11-02T11:00:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-02T16:15:00',
              },
              carrierCode: 'NH',
              number: '847',
              aircraft: {
                code: '789',
              },
              operating: {
                carrierCode: 'NH',
              },
              duration: 'PT7H15M',
              id: '55',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '6346.40',
        base: '5837.00',
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
        grandTotal: '6346.40',
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
            total: '6346.40',
            base: '5837.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '54',
              cabin: 'PREMIUM_ECONOMY',
              fareBasis: 'GOWQJ',
              class: 'G',
              includedCheckedBags: {
                quantity: 2,
              },
            },
            {
              segmentId: '55',
              cabin: 'ECONOMY',
              fareBasis: 'Y2XOWA1',
              class: 'Y',
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
      id: '38',
      source: 'GDS',
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: '2022-11-01',
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: 'PT38H10M',
          segments: [
            {
              departure: {
                iataCode: 'SYD',
                terminal: '1',
                at: '2022-11-01T21:55:00',
              },
              arrival: {
                iataCode: 'AUH',
                terminal: '3',
                at: '2022-11-02T05:30:00',
              },
              carrierCode: 'EY',
              number: '455',
              aircraft: {
                code: '77W',
              },
              operating: {
                carrierCode: 'EY',
              },
              duration: 'PT14H35M',
              id: '11',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: 'AUH',
                terminal: '3',
                at: '2022-11-02T22:35:00',
              },
              arrival: {
                iataCode: 'BKK',
                at: '2022-11-03T08:05:00',
              },
              carrierCode: 'EY',
              number: '402',
              aircraft: {
                code: '781',
              },
              operating: {
                carrierCode: 'EY',
              },
              duration: 'PT6H30M',
              id: '12',
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: 'EUR',
        total: '9185.25',
        base: '9111.00',
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
        grandTotal: '9185.25',
      },
      pricingOptions: {
        fareType: ['PUBLISHED'],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ['EY'],
      travelerPricings: [
        {
          travelerId: '1',
          fareOption: 'STANDARD',
          travelerType: 'ADULT',
          price: {
            currency: 'EUR',
            total: '9185.25',
            base: '9111.00',
          },
          fareDetailsBySegment: [
            {
              segmentId: '11',
              cabin: 'ECONOMY',
              fareBasis: 'YF1OW',
              brandedFare: 'YF',
              class: 'Y',
              includedCheckedBags: {
                weight: 35,
                weightUnit: 'KG',
              },
            },
            {
              segmentId: '12',
              cabin: 'ECONOMY',
              fareBasis: 'YF1OW',
              brandedFare: 'YF',
              class: 'Y',
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
