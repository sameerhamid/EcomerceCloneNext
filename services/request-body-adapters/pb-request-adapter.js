const PBRequestAdapter = {
    generateBookingRequest: ({
        passengerDetailsOnward, passengerDetailsReturn, selectedSeatOnward,
        selectedSeatReturn, serviceOnward, serviceReturn, cityOrigin,
        cityDestination, dateOnward, dateReturn, walletChecked, virtualChecked,
        cardChecked, selectedCard, promoCode, instantDiscount, corporateDiscount, selectedPaymentGateway,
        contactDetails, isAgenUser, netFare, deviceInfo, referralCode

    }) => {
        let bookingJson = {
            title: {},
            passenger_name: {},
            passenger_age: {},
            id_card: {},
            fare: {},
            nationality: {},
            dob: {},
            origin_country: {},
            origin_address: {},
            gender: {},
            cash_coupon: {
                coupon_code: '',
                email: '',
            },
            primary:
                passengerDetailsOnward[0].seatFloorNumber,
            promo_code: promoCode?.promoCodeApplied ? promoCode?.promoCode : null,
            // bima_onward_amount: 10,
            // bima_return_amount: 11,
            // net_amount: 10,
            bima_onward_amount: selectedSeatOnward.netBookingAmount,
            bima_return_amount: selectedSeatReturn.netBookingAmount,
            net_amount: netFare,
            selected_seats: selectedSeatOnward.selectedSeatsNumbers,
            selected_seats_r: selectedSeatReturn.selectedSeatsNumbers
                ? selectedSeatReturn.selectedSeatsNumbers
                : null,
            number_of_seats: passengerDetailsOnward.length,
            number_of_seats_r:
                passengerDetailsReturn && passengerDetailsReturn.length
                    ? passengerDetailsReturn.length
                    : null,
            boarding_at: serviceOnward.boardingStage.id,
            return_boarding_at: serviceReturn.boardingStage
                ? serviceReturn.boardingStage.id
                : null,
            drop_off: serviceOnward.droppingStage.id,
            return_drop_off: serviceReturn.droppingStage
                ? serviceReturn.droppingStage.id
                : null,
            reservation_id: serviceOnward.route.id,
            return_reservation_id: serviceReturn.route
                ? serviceReturn.route.id
                : null,
            from: cityOrigin.value,
            to: cityDestination.value,
            origin_name: cityOrigin.label,
            destination_name: cityDestination.label,
            type: '1',
            depart: dateOnward,
            return: dateReturn,
            is_charity: '0',
            referral_url: '',
            referral_code: referralCode,
            offer_coupon_details: null,
            email: contactDetails?.email,
            phone_number: contactDetails?.mobile,
            pay_gay_type: selectedPaymentGateway,
            country_code: contactDetails?.countryCode,
            is_mobile_web: 3,
            use_wallet_money: walletChecked,
            use_virtual_money: virtualChecked,
            // "device_details": deviceInfo,
            is_kupos: true,
            kupos_r_url: window.location.protocol + '//' + window.location.host,
            one_click_details: {
                card_no:
                    cardChecked && selectedCard
                        ? selectedCard[0].substr(12, 15)
                        : '',
                card_cat:
                    cardChecked && selectedCard ? selectedCard[1] : 0,
                card_type:
                    cardChecked && selectedCard ? selectedCard[2] : 0,
            },
            agency_comments: contactDetails?.adminComments ? contactDetails?.adminComments : null,
            is_agency_user: isAgenUser,
        };

        if (instantDiscount && !corporateDiscount) {
            bookingJson.is_instant_promo = true;
            bookingJson.instant_discount = instantDiscount.discount_amount;
            bookingJson.instant_discount_id = instantDiscount.instant_discount_id;
        }

        if (corporateDiscount && !instantDiscount) {
            bookingJson.corporate_company_id = corporateDiscount.corporate_company_id;
            bookingJson.corporate_discount = corporateDiscount.discount_amount;
        }

        if (corporateDiscount && instantDiscount) {
            if (
                corporateDiscount.discount_amount >
                instantDiscount.discount_amount
            ) {
                bookingJson.corporate_company_id = corporateDiscount.corporate_company_id;
                bookingJson.corporate_discount = corporateDiscount.discount_amount;
            } else {
                bookingJson.is_instant_promo = true;
                bookingJson.instant_discount = instantDiscount.discount_amount;
                bookingJson.instant_discount_id = instantDiscount.instant_discount_id;
            }
        }

        // console.log({ bookingJson })

        for (let s of passengerDetailsOnward) {
            bookingJson.title[s.seatFloorNumber] = 'Mr';
            bookingJson.passenger_name[s.seatFloorNumber] =
                s.name + '_' + s.last_name;
            bookingJson.passenger_age[s.seatFloorNumber] = '35';
            bookingJson.id_card[s.seatFloorNumber] = {
                type: s.idCardType.value,
                number: s.idCardNumber,
            };
            // bookingJson.fare[s.seatFloorNumber] = 55;
            bookingJson.fare[s.seatFloorNumber] = s.fare;
            bookingJson.nationality[s.seatFloorNumber] =
                s.nationality.value + '';
            //
            bookingJson.dob[s.seatFloorNumber] = s.dob
                ? s.dob
                : null;
            bookingJson.origin_country[
                s.seatFloorNumber
            ] = s.countryOfOrigin ? s.countryOfOrigin.value : null;
            bookingJson.origin_address[
                s.seatFloorNumber
            ] = s.addressOfOrigin ? s.addressOfOrigin : null;
            bookingJson.gender[s.seatFloorNumber] = s.gender
                ? s.gender.value
                : null;
        }
        if (passengerDetailsReturn && passengerDetailsReturn.length) {
            let i = 0;
            for (let s of passengerDetailsReturn) {
                if (i === 0) {
                    bookingJson.title.r = {};
                    bookingJson.passenger_name.r = {};
                    bookingJson.passenger_age.r = {};
                    bookingJson.id_card.r = {};
                    bookingJson.fare.r = {};
                    bookingJson.nationality.r = {};
                    bookingJson.dob.r = {};
                    bookingJson.origin_country.r = {};
                    bookingJson.origin_address.r = {};
                    bookingJson.gender.r = {};
                }
                bookingJson.title.r[s.seatFloorNumber] = 'Mr';
                bookingJson.passenger_name.r[s.seatFloorNumber] =
                    s.name + '_' + s.last_name;
                bookingJson.passenger_age.r[s.seatFloorNumber] =
                    '25';
                bookingJson.id_card.r[s.seatFloorNumber] = {
                    type: s.idCardType.value,
                    number: s.idCardNumber,
                };
                // bookingJson.fare.r[s.seatFloorNumber] = 66;
                bookingJson.fare.r[s.seatFloorNumber] = s.fare;
                bookingJson.nationality.r[s.seatFloorNumber] =
                    s.nationality.value + '';
                //
                bookingJson.dob.r[s.seatFloorNumber] = s.dob
                    ? s.dob
                    : null;
                bookingJson.origin_country.r[
                    s.seatFloorNumber
                ] = s.countryOfOrigin ? s.countryOfOrigin.value : null;
                bookingJson.origin_address.r[
                    s.seatFloorNumber
                ] = s.addressOfOrigin ? s.addressOfOrigin : null;
                bookingJson.gender.r[s.seatFloorNumber] = s.gender
                    ? s.gender.value
                    : null;
                i++;
            }
        }

        console.log(JSON.stringify(bookingJson));


        bookingJson.trip_type = dateReturn ? 'roundtrip' : 'tentative';

        return bookingJson;

    }
};
export default PBRequestAdapter;
