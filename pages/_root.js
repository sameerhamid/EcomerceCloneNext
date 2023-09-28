import {
  Masters,
  TerminalsBus,
  UniqueCitiesBus,
} from "../services/apis/apisPB";
import { useEffect } from "react";
import {
  busTerminalsState,
  kuposModalErrorSuccessState,
  kuposModalState,
  kuposModalWithButtonsState,
  metaDataState,
  uniqueBusCitiesState,
} from "../recoil/atoms/common";
import CommonService from "../services/commonService";
import { useRecoilState, useSetRecoilState } from "recoil";
import KuposModalWithButtons from "../components/ui/kupos-modal-with-buttons";
import KuposErrorSuccessModal from "../components/ui/kupos-error-success-modal/kupos-error-success-modal";
import KuposModal from "../components/ui/kupos-modal/kupos-modal";
import { Base64 } from "js-base64";

export default function Root(props) {
  const getMastersApiFunc = Masters();
  const getStagesBusApiFunc = TerminalsBus();
  const getUniqueCitiesBusFunc = UniqueCitiesBus();
  const setMetaData = useSetRecoilState(metaDataState);
  const setBusStages = useSetRecoilState(busTerminalsState);
  const setUniqueBusCities = useSetRecoilState(uniqueBusCitiesState);
  const [
    kuposModalWithButtonsValue,
    setKuposModalWithButtonsState,
  ] = useRecoilState(kuposModalWithButtonsState);
  const [
    kuposModalErrorSuccessValue,
    setKuposModalErrorSuccessState,
  ] = useRecoilState(kuposModalErrorSuccessState);
  const [kuposModalValue, setKuposModalState] = useRecoilState(kuposModalState);

  const handleMastersApiResp = (res) => {
    if (res && res.result) {
      setMetaData(res.result);
      if (typeof window !== "undefined") {
        localStorage.setItem("jwt_key", res.jwt_secret);
        localStorage.setItem(
          "metaData",
          Base64.encode(JSON.stringify(res.result))
        );
      }
      getUniqueCitiesBusFunc({
        callback: handleUniqueCitiesBusResp,
      });

      getStagesBusApiFunc({
        callback: handleStagesBusResp,
      });
    }
  };

  const handleUniqueCitiesBusResp = (res) => {
    if (res) {
      let cities = CommonService.formatCitiesNew(res);
      setUniqueBusCities(cities);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "uniqueBusCities",
          Base64.encode(JSON.stringify(cities))
        );
      }
    }
  };
  const handleStagesBusResp = (res) => {
    if (res) {
      setBusStages(res.body);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "busStages",
          Base64.encode(JSON.stringify(res.body))
        );
      }
    }
  };

  useEffect(() => {
    getMastersApiFunc({
      callback: handleMastersApiResp,
    });
  }, []);

  const closeModal = () => {
    setKuposModalWithButtonsState({});
  };
  const closeErrorSuccessModal = () => {
    setKuposModalErrorSuccessState({});
  };
  const closeKuposModal = () => {
    setKuposModalState({});
  };

  return (
    <>
      {props.children}
      <KuposModalWithButtons
        size={kuposModalWithButtonsValue.size || "md"}
        showModal={kuposModalWithButtonsValue.showModal}
        title={kuposModalWithButtonsValue.modalTitle}
        bodyText={kuposModalWithButtonsValue.modalBody}
        type={kuposModalWithButtonsValue.type || "alert"}
        showButton1={kuposModalWithButtonsValue.showButton1 ?? true}
        buttonText1={kuposModalWithButtonsValue.buttonText1 ?? "OK"}
        onButtonClick1={
          kuposModalWithButtonsValue.onButtonClick1
            ? kuposModalWithButtonsValue.onButtonClick1
            : closeModal
        }
        showButton2={kuposModalWithButtonsValue.showButton2}
        buttonText2={kuposModalWithButtonsValue.buttonText2}
        onButtonClick2={
          kuposModalWithButtonsValue.onButtonClick2
            ? kuposModalWithButtonsValue.onButtonClick2
            : closeModal
        }
        icon={kuposModalWithButtonsValue.modalIcon}
        buttonTextStyle={{ fontSize: 15 }}
        showCloseIcon={
          kuposModalWithButtonsValue.showCloseIcon
            ? kuposModalWithButtonsValue.showCloseIcon
            : closeModal
        }
        hideIcon={kuposModalWithButtonsValue.hideIcon}
        onHide={
          kuposModalWithButtonsValue.onHide
            ? kuposModalWithButtonsValue.onHide
            : closeModal
        }
        backdrop={kuposModalWithButtonsValue.backdrop ?? true}
      />
      <KuposErrorSuccessModal
        size={kuposModalErrorSuccessValue.size || "md"}
        showModal={kuposModalErrorSuccessValue.showModal}
        success={kuposModalErrorSuccessValue.success}
        title={kuposModalErrorSuccessValue.modalTitle}
        subTitle={kuposModalErrorSuccessValue.modalSubTitle}
        bodyText={kuposModalErrorSuccessValue.modalBody}
        onButtonClick={
          kuposModalErrorSuccessValue.onButtonClick
            ? kuposModalErrorSuccessValue.onButtonClick
            : closeErrorSuccessModal
        }
        showButton1={kuposModalErrorSuccessValue.showButton1}
        buttonText1={kuposModalErrorSuccessValue.buttonText1}
        onButtonClick1={
          kuposModalErrorSuccessValue.onButtonClick1
            ? kuposModalErrorSuccessValue.onButtonClick1
            : closeErrorSuccessModal
        }
        showButton2={kuposModalErrorSuccessValue.showButton2}
        buttonText2={kuposModalErrorSuccessValue.buttonText2}
        onButtonClick2={
          kuposModalErrorSuccessValue.onButtonClick2
            ? kuposModalErrorSuccessValue.onButtonClick2
            : closeErrorSuccessModal
        }
        onHide={
          kuposModalErrorSuccessValue.onHide
            ? kuposModalErrorSuccessValue.onHide
            : closeErrorSuccessModal
        }
        backdrop={kuposModalErrorSuccessValue.backdrop ?? true}
        showMyTitle={kuposModalErrorSuccessValue.showMyTitle}
        generalButton={kuposModalErrorSuccessValue.generalButton}
      />
      <KuposModal
        size={kuposModalValue.size || "md"}
        showModal={kuposModalValue.showModal}
        onHide={
          kuposModalValue.onHide ? kuposModalValue.onHide : closeKuposModal
        }
      >
        {kuposModalValue.children ? kuposModalValue.children() : []}
      </KuposModal>
    </>
  );
}
