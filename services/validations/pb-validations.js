import CommonService from "../commonService";

const PBValidations = {
    bookingValidation: ({
        passengerDetailsOnward, passengerDetailsReturn, dateReturn, promoCode, selectedPaymentGateway,
        contactDetails, isAgenUser, netFare, internationalService, setErrorsOnward, errorsOnward, setErrorsReturn, errorsReturn,
        contactDetailsError, setContactDetailsError

    }) => {

        let errorCount = 0;


        // contact details errors ------------------------
        let contactErrors = CommonService.copyObject(contactDetailsError)
        if (!contactDetails.mobile) {
            contactErrors.mobileError = 'VALIDATIONS.VALID_MOBILE'
            errorCount++;
        }
        if (!contactDetails.email) {
            contactErrors.emailError = 'VALIDATIONS.VALID_EMAIL'
            errorCount++;
        } else if (!CommonService.isEMailValid(contactDetails.email)) {
            contactErrors.emailError = 'VALIDATIONS.VALID_EMAIL_VALIDATION'
            errorCount++;
        }
        if (contactDetails.confirmEmail != contactDetails.email) {
            contactErrors.confirmEmailError = 'VALIDATIONS.VALID_EMAIL_MATCH'
            errorCount++;
        }
        if (!contactDetails.confirmEmail) {
            contactErrors.confirmEmailError = 'VALIDATIONS.VALID_CONFIRM_EMAIL'
            errorCount++;
        }
        setContactDetailsError(contactErrors)

        // if (promoCode?.promoCodeApplied) {
        //     if (!promoCode?.promoCode) {
        //         errorCount++;
        //         this.setState({
        //             promoCodeError: {
        //                 message: 'VALIDATIONS.VALID_PROMOTION',
        //             },
        //         });
        //     }
        // }


        // passenger info errors --------------------=-----------=-----------=---------
        let passengerDetailsOnwardLocal = CommonService.copyObject(
            passengerDetailsOnward,
        );
        let passengerDetailsReturnLocal = CommonService.copyObject(
            passengerDetailsReturn,
        );
        // onward passenger errors -----------=---------
        let passengerInfoErrorsOnward = CommonService.copyObject(errorsOnward);
        for (let p of passengerDetailsOnwardLocal) {
            console.log('Passenger details-----', p);
            if (!p.name) {
                if (!passengerInfoErrorsOnward['name']) passengerInfoErrorsOnward['name'] = {}
                passengerInfoErrorsOnward['name'][p.seatNumber] = 'VALIDATIONS.VALID_NAME';
                errorCount++;
            }
            if (!p.last_name) {
                if (!passengerInfoErrorsOnward['last_name']) passengerInfoErrorsOnward['last_name'] = {}
                passengerInfoErrorsOnward['last_name'][p.seatNumber] = 'VALIDATIONS.VALID_SURNAME';
                errorCount++;
            }
            if (!p.idCardNumber) {
                if (!passengerInfoErrorsOnward['idCardNumber']) passengerInfoErrorsOnward['idCardNumber'] = {}
                passengerInfoErrorsOnward['idCardNumber'][p.seatNumber] = p.idCardType && p.idCardType.value == 7 ? 'VALIDATIONS.VALID_RUT' : 'VALIDATIONS.VALID_PASSPORT';
                errorCount++;
            } else {
                if (
                    // p.nationality.id == 1 &&
                    !CommonService.isRutValid(p.idCardNumber) &&
                    p.idCardType.value == 7
                ) {
                    if (!passengerInfoErrorsOnward['idCardNumber']) passengerInfoErrorsOnward['idCardNumber'] = {}
                    passengerInfoErrorsOnward['idCardNumber'][p.seatNumber] = p.idCardType && p.idCardType.value == 7 ? 'VALIDATIONS.VALID_RUT' : 'VALIDATIONS.VALID_PASSPORT';
                    errorCount++;
                }
            }

            if (internationalService && !p.dob) {
                if (!passengerInfoErrorsOnward['dob']) passengerInfoErrorsOnward['dob'] = {}
                passengerInfoErrorsOnward['dob'][p.seatNumber] = 'VALIDATIONS.DOB_ERROR';
                errorCount++;
            }

            if (internationalService && !p.countryOfOrigin) {
                if (!passengerInfoErrorsOnward['countryOfOrigin']) passengerInfoErrorsOnward['countryOfOrigin'] = {}
                passengerInfoErrorsOnward['countryOfOrigin'][p.seatNumber] = 'VALIDATIONS.ORIGIN_COUNTRY_ERROR';
                errorCount++;
            }

            if (internationalService && !p.addressOfOrigin) {
                if (!passengerInfoErrorsOnward['addressOfOrigin']) passengerInfoErrorsOnward['addressOfOrigin'] = {}
                passengerInfoErrorsOnward['addressOfOrigin'][p.seatNumber] = 'VALIDATIONS.ORIGIN_ADDRESS_ERROR';
                errorCount++;
            }

            if (internationalService && !p.gender) {
                if (!passengerInfoErrorsOnward['gender']) passengerInfoErrorsOnward['gender'] = {}
                passengerInfoErrorsOnward['gender'][p.seatNumber] = 'VALIDATIONS.GENDER_ERROR';
                errorCount++;
            }
        }
        setErrorsOnward(passengerInfoErrorsOnward);

        // return passenger errors -----------=---------
        let passengerInfoErrorsReturn = CommonService.copyObject(errorsReturn);
        if (dateReturn) {
            for (let p of passengerDetailsReturnLocal) {
                if (!p.name) {
                    if (!passengerInfoErrorsReturn['name']) passengerInfoErrorsReturn['name'] = {}
                    passengerInfoErrorsReturn['name'][p.seatNumber] = 'VALIDATIONS.VALID_NAME';
                    errorCount++;
                }
                if (!p.last_name) {
                    if (!passengerInfoErrorsReturn['last_name']) passengerInfoErrorsReturn['last_name'] = {}
                    passengerInfoErrorsReturn['last_name'][p.seatNumber] = 'VALIDATIONS.VALID_SURNAME';
                    errorCount++;
                }

                if (internationalService && !p.dob) {
                    if (!passengerInfoErrorsReturn['dob']) passengerInfoErrorsReturn['dob'] = {}
                    passengerInfoErrorsReturn['dob'][p.seatNumber] = 'VALIDATIONS.DOB_ERROR';
                    errorCount++;
                }

                if (internationalService && !p.countryOfOrigin) {
                    if (!passengerInfoErrorsReturn['countryOfOrigin']) passengerInfoErrorsReturn['countryOfOrigin'] = {}
                    passengerInfoErrorsReturn['countryOfOrigin'][p.seatNumber] = 'VALIDATIONS.ORIGIN_COUNTRY_ERROR';
                    errorCount++;
                }

                if (internationalService && !p.dob) {
                    if (!passengerInfoErrorsReturn['addressOfOrigin']) passengerInfoErrorsReturn['addressOfOrigin'] = {}
                    passengerInfoErrorsReturn['addressOfOrigin'][p.seatNumber] = 'VALIDATIONS.ORIGIN_ADDRESS_ERROR';
                    errorCount++;
                }

                if (internationalService && !p.gender) {
                    if (!passengerInfoErrorsReturn['gender']) passengerInfoErrorsReturn['gender'] = {}
                    passengerInfoErrorsReturn['gender'][p.seatNumber] = 'VALIDATIONS.GENDER_ERROR';
                    errorCount++;
                }

                if (!p.idCardNumber) {
                    if (!passengerInfoErrorsReturn['idCardNumber']) passengerInfoErrorsReturn['idCardNumber'] = {}
                    passengerInfoErrorsReturn['idCardNumber'][p.seatNumber] = p.idCardType && p.idCardType.value == 7 ? 'VALIDATIONS.VALID_RUT' : 'VALIDATIONS.VALID_PASSPORT';
                    errorCount++;
                } else {
                    if (
                        // p.nationality.id == 1 &&
                        !CommonService.isRutValid(p.idCardNumber) &&
                        p.idCardType.value == 7
                    ) {
                        if (!passengerInfoErrorsReturn['idCardNumber']) passengerInfoErrorsReturn['idCardNumber'] = {}
                        passengerInfoErrorsReturn['idCardNumber'][p.seatNumber] = p.idCardType && p.idCardType.value == 7 ? 'VALIDATIONS.VALID_RUT' : 'VALIDATIONS.VALID_PASSPORT';
                        errorCount++;
                    }
                }
            }
        }
        setErrorsReturn(passengerInfoErrorsReturn);

        // if (!tncChecked) {
        //     errorCount++;
        // }

        if (!isAgenUser && !selectedPaymentGateway && netFare > 0) {
            console.log(
                'testing inside paymennt gateway check-----',
                selectedPaymentGateway,
            );
            errorCount++;
        }

        if (errorCount > 0) {
            return false
        }


        return true;

    }
};
export default PBValidations;
