document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("diagnosisButton");

    if (!button) return;


    // =====================================================
    // 공통 결과 표시 함수
    // =====================================================

    function showResult(resultTitle, resultMessage, resultClass, consultUrl) {

        const oldResult = document.getElementById("diagnosisResult");

        if (oldResult) {
            oldResult.remove();
        }

        const resultBox = document.createElement("div");

        resultBox.id = "diagnosisResult";
        resultBox.className = "diagnosis-result " + resultClass;

        resultBox.innerHTML = `
            <p class="result-label">SELF CHECK RESULT</p>

            <h2>${resultTitle}</h2>

            <p>${resultMessage}</p>

            <a href="${consultUrl}"
               class="result-consult-button">
                상담 신청
            </a>
        `;


        const form = document.getElementById("diagnosisForm");

        if (form) {
            form.appendChild(resultBox);
        } else {
            button.parentElement.appendChild(resultBox);
        }


        resultBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }



    // =====================================================
    // 여행업 등록 자가진단
    // =====================================================

    if (document.querySelector('input[name="travelType"]')) {

        button.addEventListener("click", function () {

            const travelType =
                document.querySelector('input[name="travelType"]:checked');

            const capital =
                document.querySelector('input[name="capital"]:checked');

            const office =
                document.querySelector('input[name="office"]:checked');

            const disqualification =
                document.querySelector('input[name="disqualification"]:checked');


            if (!travelType || !capital || !office || !disqualification) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // 아니오가 하나라도 있는 경우
            if (
                capital.value === "no" ||
                office.value === "no" ||
                disqualification.value === "no"
            ) {

                resultTitle = "추가 확인이 필요합니다.";

                resultMessage =
                    "현재 답변 중 여행업 등록요건을 추가로 확인하거나 " +
                    "보완해야 할 항목이 있습니다. 신청인의 상황과 관련 자료를 " +
                    "확인하여 등록 가능 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }

            // 잘 모르겠습니다가 하나라도 있는 경우
            else if (
                travelType.value === "unknown" ||
                capital.value === "unknown" ||
                office.value === "unknown" ||
                disqualification.value === "unknown"
            ) {

                resultTitle = "전문적인 검토를 권장합니다.";

                resultMessage =
                    "일부 여행업 등록요건에 대해 확인이 필요합니다. " +
                    "등록하려는 여행업의 종류와 신청인의 상황을 기준으로 " +
                    "구체적인 검토가 필요합니다.";

                resultClass = "result-check";
            }

            // 모두 충족
            else {

                resultTitle = "기본요건을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 여행업 등록의 기본적인 확인사항은 " +
                    "준비된 것으로 보입니다. 다만 실제 등록 가능 여부는 " +
                    "관련 서류와 세부요건을 추가로 검토해야 합니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=travel"
            );

        });

        return;
    }



    // =====================================================
    // 외국인환자 유치업 자가진단
    // =====================================================

    if (document.querySelector('input[name="applicantType"]')) {

        button.addEventListener("click", function () {

            const applicantType =
                document.querySelector('input[name="applicantType"]:checked');

            const newRegistration =
                document.querySelector('input[name="newRegistration"]:checked');

            const financial =
                document.querySelector('input[name="financial"]:checked');

            const additionalRequirement =
                document.querySelector('input[name="additionalRequirement"]:checked');


            if (
                !applicantType ||
                !newRegistration ||
                !financial ||
                !additionalRequirement
            ) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            if (
                newRegistration.value === "no" ||
                financial.value === "no" ||
                additionalRequirement.value === "no"
            ) {

                resultTitle = "추가 확인이 필요합니다.";

                resultMessage =
                    "현재 답변 중 등록을 위해 추가로 확인하거나 " +
                    "보완해야 할 사항이 있습니다. 관련 자료를 기준으로 " +
                    "등록 가능 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }

            else if (
                newRegistration.value === "unknown" ||
                financial.value === "unknown" ||
                additionalRequirement.value === "unknown"
            ) {

                resultTitle = "전문적인 검토를 권장합니다.";

                resultMessage =
                    "일부 등록요건에 대해 추가 확인이 필요합니다. " +
                    "신청인의 사업 형태와 관련 자료를 기준으로 " +
                    "구체적인 검토가 필요합니다.";

                resultClass = "result-check";
            }

            else {

                resultTitle = "기본요건을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 기본적인 확인사항은 준비된 것으로 보입니다. " +
                    "다만 실제 등록 가능 여부는 관련 서류와 세부요건을 " +
                    "추가로 검토해야 합니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=foreign-patient"
            );

        });
    }

    // =====================================================
    // 국제회의기획업 등록 자가진단
    // =====================================================

    if (document.querySelector('input[name="conventionType"]')) {

        button.addEventListener("click", function () {

            const conventionType =
                document.querySelector('input[name="conventionType"]:checked');

            const conventionCapital =
                document.querySelector('input[name="conventionCapital"]:checked');

            const conventionOffice =
                document.querySelector('input[name="conventionOffice"]:checked');

            const conventionDisqualification =
                document.querySelector('input[name="conventionDisqualification"]:checked');


            if (
                !conventionType ||
                !conventionCapital ||
                !conventionOffice ||
                !conventionDisqualification
            ) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // 아니오가 하나라도 있는 경우
            if (
                conventionCapital.value === "no" ||
                conventionOffice.value === "no" ||
                conventionDisqualification.value === "no"
            ) {

                resultTitle = "추가 확인이 필요합니다.";

                resultMessage =
                    "현재 답변 중 국제회의기획업 등록요건을 추가로 확인하거나 " +
                    "보완해야 할 항목이 있습니다. 신청인의 상황과 관련 자료를 " +
                    "확인하여 등록 가능 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }

            // 잘 모르겠습니다가 하나라도 있는 경우
            else if (
                conventionCapital.value === "unknown" ||
                conventionOffice.value === "unknown" ||
                conventionDisqualification.value === "unknown"
            ) {

                resultTitle = "전문적인 검토를 권장합니다.";

                resultMessage =
                    "일부 국제회의기획업 등록요건에 대해 확인이 필요합니다. " +
                    "신청인의 사업 형태와 관련 자료를 기준으로 " +
                    "구체적인 검토가 필요합니다.";

                resultClass = "result-check";
            }

            // 모두 충족
            else {

                resultTitle = "기본요건을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 국제회의기획업 등록의 기본적인 확인사항은 " +
                    "준비된 것으로 보입니다. 다만 실제 등록 가능 여부는 " +
                    "관련 서류와 세부요건을 추가로 검토해야 합니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=convention"
            );

        });

        return;
    }

    // =====================================================
    // 외국인환자 유치의료기관 등록 자가진단
    // =====================================================

    if (document.querySelector('input[name="medicalLicense"]')) {

        button.addEventListener("click", function () {

            const medicalLicense =
                document.querySelector('input[name="medicalLicense"]:checked');

            const medicalSpecialist =
                document.querySelector('input[name="medicalSpecialist"]:checked');

            const medicalInsurance =
                document.querySelector('input[name="medicalInsurance"]:checked');

            const medicalBusiness =
                document.querySelector('input[name="medicalBusiness"]:checked');


            if (
                !medicalLicense ||
                !medicalSpecialist ||
                !medicalInsurance ||
                !medicalBusiness
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // 아니오가 하나라도 있는 경우
            if (
                medicalLicense.value === "no" ||
                medicalSpecialist.value === "no" ||
                medicalInsurance.value === "no" ||
                medicalBusiness.value === "no"
            ) {

                resultTitle = "추가 확인이 필요합니다.";

                resultMessage =
                    "현재 답변 중 외국인환자 유치의료기관 등록을 위해 " +
                    "추가로 확인하거나 보완해야 할 사항이 있습니다. " +
                    "의료기관의 현황과 관련 서류를 기준으로 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }

            // 잘 모르겠습니다가 하나라도 있는 경우
            else if (
                medicalLicense.value === "unknown" ||
                medicalSpecialist.value === "unknown" ||
                medicalInsurance.value === "unknown" ||
                medicalBusiness.value === "unknown"
            ) {

                resultTitle = "전문적인 검토를 권장합니다.";

                resultMessage =
                    "일부 등록요건에 대해 추가 확인이 필요합니다. " +
                    "의료기관의 형태와 진료과목 및 관련 자료를 기준으로 " +
                    "구체적인 검토가 필요합니다.";

                resultClass = "result-check";
            }

            // 모두 예
            else {

                resultTitle = "기본요건을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 외국인환자 유치의료기관 등록의 " +
                    "기본적인 확인사항은 준비된 것으로 보입니다. " +
                    "다만 실제 등록 가능 여부는 관련 서류와 세부요건을 " +
                    "추가로 검토해야 합니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=foreign-patient-medical"
            );

        });

        return;
    }

    // =====================================================
    // 동물판매업 허가 자가진단
    // =====================================================

    if (document.querySelector('input[name="animalSalePlace"]')) {

        button.addEventListener("click", function () {

            const animalSalePlace =
                document.querySelector('input[name="animalSalePlace"]:checked');

            const animalSaleFacility =
                document.querySelector('input[name="animalSaleFacility"]:checked');

            const animalSaleStaff =
                document.querySelector('input[name="animalSaleStaff"]:checked');

            const animalSalePreparation =
                document.querySelector('input[name="animalSalePreparation"]:checked');


            if (
                !animalSalePlace ||
                !animalSaleFacility ||
                !animalSaleStaff ||
                !animalSalePreparation
            ) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // 아니오가 하나라도 있는 경우
            if (
                animalSalePlace.value === "no" ||
                animalSaleFacility.value === "no" ||
                animalSaleStaff.value === "no" ||
                animalSalePreparation.value === "no"
            ) {

                resultTitle = "추가 확인이 필요합니다.";

                resultMessage =
                    "현재 답변 중 동물판매업 허가를 위해 추가로 확인하거나 " +
                    "보완해야 할 사항이 있습니다. 영업장과 시설·인력 현황 등을 " +
                    "기준으로 허가 가능 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }

            // 잘 모르겠습니다가 하나라도 있는 경우
            else if (
                animalSalePlace.value === "unknown" ||
                animalSaleFacility.value === "unknown" ||
                animalSaleStaff.value === "unknown" ||
                animalSalePreparation.value === "unknown"
            ) {

                resultTitle = "전문적인 검토를 권장합니다.";

                resultMessage =
                    "일부 동물판매업 허가기준에 대해 추가 확인이 필요합니다. " +
                    "영업장의 현황과 취급 동물 및 관련 자료를 기준으로 " +
                    "구체적인 검토가 필요합니다.";

                resultClass = "result-check";
            }

            // 모두 예
            else {

                resultTitle = "기본요건을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 동물판매업 허가의 기본적인 확인사항은 " +
                    "준비된 것으로 보입니다. 다만 실제 허가 가능 여부는 " +
                    "시설·인력 기준과 관련 서류를 추가로 검토해야 합니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=animal-sale"
            );

        });

        return;
    }

  // 야생동물 판매업 허가 자가진단
if (document.querySelector('input[name="wildlifeType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wildlifeType =
            document.querySelector('input[name="wildlifeType"]:checked');

        const wildlifeRoom =
            document.querySelector('input[name="wildlifeRoom"]:checked');

        const wildlifeFacility =
            document.querySelector('input[name="wildlifeFacility"]:checked');

        const wildlifeEducation =
            document.querySelector('input[name="wildlifeEducation"]:checked');

        const wildlifeManagement =
            document.querySelector('input[name="wildlifeManagement"]:checked');

        const wildlifeDocuments =
            document.querySelector('input[name="wildlifeDocuments"]:checked');


        // 모든 문항 응답 확인
        if (
            !wildlifeType ||
            !wildlifeRoom ||
            !wildlifeFacility ||
            !wildlifeEducation ||
            !wildlifeManagement ||
            !wildlifeDocuments
        ) {
            alert("모든 항목에 답변해 주세요.");
            return;
        }


        const answers = [
            wildlifeType.value,
            wildlifeRoom.value,
            wildlifeFacility.value,
            wildlifeEducation.value,
            wildlifeManagement.value,
            wildlifeDocuments.value
        ];


        const noCount =
            answers.filter(value => value === "no").length;

        const unknownCount =
            answers.filter(value => value === "unknown").length;


        // 모두 준비된 경우
        if (noCount === 0 && unknownCount === 0) {

            showResult(
                "허가 준비상태가 비교적 양호합니다.",
                "현재 답변을 기준으로 보면 야생동물 판매업 허가를 위한 주요 준비사항이 비교적 잘 갖춰져 있습니다. 다만 실제 허가 가능 여부는 취급하려는 야생동물과 영업장·시설의 구체적인 상태를 확인하여 최종 검토해야 합니다.",
                "result-success",
                "consult.html?type=wildlife-sale"
            );

        }

        // 아니오가 있는 경우
        else if (noCount > 0) {

            showResult(
                "허가 신청 전에 추가 검토가 필요한 사항이 있습니다.",
                "현재 준비되지 않은 항목이 있습니다. 야생동물 판매업은 취급 대상과 영업장, 사육·격리시설, 교육 및 관리체계 등을 함께 검토해야 하므로 부족한 부분을 확인한 후 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-sale"
            );

        }

        // 잘 모르겠습니다만 있는 경우
        else {

            showResult(
                "허가요건에 대한 확인이 필요합니다.",
                "일부 항목의 적용 여부를 정확히 판단하기 어려운 상태입니다. 취급하려는 야생동물과 영업장 계획을 기준으로 허가대상 여부와 필요한 시설·준비사항을 먼저 확인해 보는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-sale"
            );

        }

    });

    return;
}

    // =====================================================
    // 민간자격 등록 자가진단
    // =====================================================

    if (document.querySelector('input[name="privateQualificationName"]')) {

        button.addEventListener("click", function () {

            const qualificationName =
                document.querySelector('input[name="privateQualificationName"]:checked');

            const qualificationTest =
                document.querySelector('input[name="privateQualificationTest"]:checked');

            const qualificationNational =
                document.querySelector('input[name="privateQualificationNational"]:checked');

            const qualificationOperation =
                document.querySelector('input[name="privateQualificationOperation"]:checked');

            const qualificationDocuments =
                document.querySelector('input[name="privateQualificationDocuments"]:checked');


            // 모든 질문 답변 여부 확인
            if (
                !qualificationName ||
                !qualificationTest ||
                !qualificationNational ||
                !qualificationOperation ||
                !qualificationDocuments
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // 아니오가 하나라도 있는 경우
            if (
                qualificationName.value === "no" ||
                qualificationTest.value === "no" ||
                qualificationNational.value === "no" ||
                qualificationOperation.value === "no" ||
                qualificationDocuments.value === "no"
            ) {

                resultTitle = "추가 준비가 필요합니다.";

                resultMessage =
                    "현재 답변 중 민간자격 등록을 위해 추가로 준비하거나 " +
                    "검토해야 할 사항이 있습니다. 자격명칭과 직무내용, " +
                    "검정기준 및 운영계획 등을 구체적으로 확인한 후 " +
                    "등록을 준비하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // 잘 모르겠습니다가 하나라도 있는 경우
            else if (
                qualificationName.value === "unknown" ||
                qualificationTest.value === "unknown" ||
                qualificationNational.value === "unknown" ||
                qualificationOperation.value === "unknown" ||
                qualificationDocuments.value === "unknown"
            ) {

                resultTitle = "전문적인 검토를 권장합니다.";

                resultMessage =
                    "일부 민간자격 등록사항에 대한 확인이 필요합니다. " +
                    "등록하려는 자격의 명칭과 직무내용 및 운영계획을 기준으로 " +
                    "등록 가능 여부와 준비사항을 구체적으로 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 모두 예인 경우
            else {

                resultTitle = "기본적인 준비사항을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 민간자격 등록을 위한 기본적인 " +
                    "준비사항은 갖추어진 것으로 보입니다. 다만 실제 등록 가능 여부는 " +
                    "자격명칭, 직무내용 및 관련 제한사항 등을 추가로 검토해야 합니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=private-qualification"
            );

        });

        return;
    }

    // =====================================================
    // 고유번호증 발급 자가진단
    // =====================================================

    if (document.querySelector('input[name="uniqueNumberRules"]')) {

        button.addEventListener("click", function () {

            const rules =
                document.querySelector('input[name="uniqueNumberRules"]:checked');

            const representative =
                document.querySelector('input[name="uniqueNumberRepresentative"]:checked');

            const property =
                document.querySelector('input[name="uniqueNumberProperty"]:checked');

            const distribution =
                document.querySelector('input[name="uniqueNumberDistribution"]:checked');

            const documents =
                document.querySelector('input[name="uniqueNumberDocuments"]:checked');


            // 모든 질문 답변 여부 확인
            if (
                !rules ||
                !representative ||
                !property ||
                !distribution ||
                !documents
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // 핵심요건 중 아니오가 있는 경우
            if (
                rules.value === "no" ||
                representative.value === "no" ||
                property.value === "no" ||
                distribution.value === "no"
            ) {

                resultTitle = "신청 전 요건 검토가 필요합니다.";

                resultMessage =
                    "현재 답변 중 법인으로 보는 단체의 승인을 위해 " +
                    "추가로 갖추거나 검토해야 할 사항이 있습니다. " +
                    "단체의 조직·운영규정, 대표자 선임, 재산 및 수익의 관리방식, " +
                    "수익의 구성원 분배 여부 등을 먼저 확인하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // 핵심요건을 잘 모르는 경우
            else if (
                rules.value === "unknown" ||
                representative.value === "unknown" ||
                property.value === "unknown" ||
                distribution.value === "unknown"
            ) {

                resultTitle = "단체의 운영형태에 대한 검토가 필요합니다.";

                resultMessage =
                    "법인으로 보는 단체의 승인요건 중 확인이 필요한 사항이 있습니다. " +
                    "단체의 정관·규약과 실제 운영방식을 함께 검토하여 " +
                    "신청 가능 여부를 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 핵심요건은 충족하지만 서류 준비가 안 된 경우
            else if (
                documents.value === "no" ||
                documents.value === "unknown"
            ) {

                resultTitle = "신청서류 준비가 필요합니다.";

                resultMessage =
                    "현재 답변상 기본적인 단체요건은 갖춘 것으로 보이나 " +
                    "신청에 필요한 관련 자료의 준비 또는 검토가 필요합니다. " +
                    "정관·규약, 회의록 등 단체의 설립과 운영을 확인할 수 있는 " +
                    "자료를 정리한 후 신청하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 모두 예인 경우
            else {

                resultTitle = "기본적인 신청요건을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 법인으로 보는 단체의 승인 및 " +
                    "고유번호증 발급을 위한 기본적인 사항은 갖추어진 것으로 보입니다. " +
                    "다만 실제 신청 전에는 단체의 정관·규약과 운영내용 및 " +
                    "관련 신청서류를 구체적으로 확인할 필요가 있습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=unique-number"
            );

        });

        return;
    }

    // =====================================================
    // 단기상용비자(C-3-4) 자가진단
    // =====================================================

    if (document.querySelector('input[name="businessVisaPurpose"]')) {

        button.addEventListener("click", function () {

            const purpose =
                document.querySelector('input[name="businessVisaPurpose"]:checked');

            const inviter =
                document.querySelector('input[name="businessVisaInviter"]:checked');

            const paidWork =
                document.querySelector('input[name="businessVisaPaidWork"]:checked');

            const schedule =
                document.querySelector('input[name="businessVisaSchedule"]:checked');

            const evidence =
                document.querySelector('input[name="businessVisaEvidence"]:checked');


            // 모든 질문 답변 여부 확인
            if (
                !purpose ||
                !inviter ||
                !paidWork ||
                !schedule ||
                !evidence
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // C-3-4 목적과 맞지 않을 가능성이 큰 경우
            // 3번은 "예"가 부정적인 답변
            if (
                purpose.value === "no" ||
                paidWork.value === "yes"
            ) {

                resultTitle = "체류자격에 대한 검토가 필요합니다.";

                resultMessage =
                    "현재 답변상 예정된 활동이 단기상용비자(C-3-4)의 " +
                    "활동범위와 맞는지 추가 검토가 필요합니다. " +
                    "특히 국내에서 노무·기술을 제공하고 보수를 받는 활동은 " +
                    "방문목적과 실제 활동내용을 구체적으로 확인해야 합니다.";

                resultClass = "result-warning";
            }


            // 핵심사항을 잘 모르는 경우
            else if (
                purpose.value === "unknown" ||
                inviter.value === "unknown" ||
                paidWork.value === "unknown"
            ) {

                resultTitle = "방문목적에 대한 사전 검토가 필요합니다.";

                resultMessage =
                    "단기상용비자 신청에 필요한 핵심사항 중 " +
                    "확인이 필요한 내용이 있습니다. " +
                    "신청인의 방문목적과 국내 초청관계 및 실제 활동내용을 " +
                    "확인한 후 적합한 체류자격을 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 초청관계 또는 입증자료가 부족한 경우
            else if (
                inviter.value === "no" ||
                schedule.value === "no" ||
                schedule.value === "unknown" ||
                evidence.value === "no" ||
                evidence.value === "unknown"
            ) {

                resultTitle = "신청자료에 대한 추가 준비가 필요합니다.";

                resultMessage =
                    "현재 답변상 단기상용 목적은 확인되지만 " +
                    "초청관계, 방문일정 또는 상용목적을 설명할 자료에 대한 " +
                    "추가 준비가 필요합니다. 관련 자료를 검토한 후 " +
                    "사증 신청을 준비하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 1·2·4·5 예 + 3 아니오
            else {

                resultTitle = "기본적인 신청사항을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 단기상용비자(C-3-4) 신청을 위한 " +
                    "기본적인 사항은 확인된 것으로 보입니다. " +
                    "다만 실제 사증 발급 여부는 신청인의 구체적인 방문목적, " +
                    "초청관계 및 제출자료 등에 대한 심사를 거쳐 결정됩니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=business-visa"
            );

        });

        return;
    }

    // =====================================================
    // 방문동거(F-1-5) 자가진단
    // =====================================================

    if (document.querySelector('input[name="f15MarriageImmigrant"]')) {

        button.addEventListener("click", function () {

            const marriageImmigrant =
                document.querySelector('input[name="f15MarriageImmigrant"]:checked');

            const parent =
                document.querySelector('input[name="f15Parent"]:checked');

            const childCare =
                document.querySelector('input[name="f15ChildCare"]:checked');

            const humanitarian =
                document.querySelector('input[name="f15Humanitarian"]:checked');

            const violation =
                document.querySelector('input[name="f15Violation"]:checked');


            // 모든 질문 답변 여부 확인
            if (
                !marriageImmigrant ||
                !parent ||
                !childCare ||
                !humanitarian ||
                !violation
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 기본적인 초청인 자격에 해당하지 않는 경우
            if (marriageImmigrant.value === "no") {

                resultTitle = "초청인 자격에 대한 검토가 필요합니다.";

                resultMessage =
                    "현재 답변상 방문동거(F-1-5) 초청인의 기본적인 자격에 " +
                    "해당하는지 추가 확인이 필요합니다. " +
                    "결혼이민자의 체류자격과 가족관계 등을 확인하여 " +
                    "적합한 초청 또는 체류자격을 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ② 불법체류·불법취업 등 문제가 있었던 경우
            // 5번은 '예'가 부정적인 답변
            else if (violation.value === "yes") {

                resultTitle = "사증 발급 제한사항에 대한 검토가 필요합니다.";

                resultMessage =
                    "과거 초청 또는 체류 과정의 위반사항이 있는 경우 " +
                    "사증 발급에 영향을 줄 수 있습니다. " +
                    "구체적인 위반내용과 경과기간 등을 확인한 후 " +
                    "신청 가능 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ③ 부모가 아닌 경우 → 예외대상 검토
            else if (parent.value === "no") {

                resultTitle = "예외적인 초청대상에 해당하는지 확인이 필요합니다.";

                resultMessage =
                    "초청하려는 사람이 결혼이민자의 부모가 아닌 경우에도 " +
                    "가족관계와 가정의 구체적인 상황에 따라 " +
                    "예외적인 초청 가능성을 검토할 수 있습니다. " +
                    "피초청인과 결혼이민자의 관계를 구체적으로 확인해야 합니다.";

                resultClass = "result-check";
            }


            // ④ 자녀양육도 아니고 인도적 사유도 없는 경우
            else if (
                childCare.value === "no" &&
                humanitarian.value === "no"
            ) {

                resultTitle = "초청사유에 대한 검토가 필요합니다.";

                resultMessage =
                    "현재 답변상 자녀 양육지원 또는 인도적 사유가 " +
                    "확인되지 않습니다. 방문동거(F-1-5)에 해당하는 " +
                    "다른 초청사유가 있는지 구체적인 검토가 필요합니다.";

                resultClass = "result-warning";
            }


            // ⑤ 잘 모르겠다는 답변이 있는 경우
            else if (
                marriageImmigrant.value === "unknown" ||
                parent.value === "unknown" ||
                childCare.value === "unknown" ||
                humanitarian.value === "unknown" ||
                violation.value === "unknown"
            ) {

                resultTitle = "구체적인 초청요건 확인이 필요합니다.";

                resultMessage =
                    "현재 답변 중 확인되지 않은 사항이 있습니다. " +
                    "결혼이민자와 피초청인의 가족관계, 초청사유 및 " +
                    "기존 체류이력 등을 확인하여 신청 가능성을 " +
                    "검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑥ 기본조건 확인
            else {

                resultTitle = "기본적인 초청요건을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 방문동거(F-1-5) 신청을 위한 " +
                    "기본적인 사항은 확인된 것으로 보입니다. " +
                    "다만 실제 사증 발급 여부는 가족관계, 초청사유, " +
                    "자녀의 연령 및 관련 입증자료 등을 종합하여 결정됩니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=family-visit-f15"
            );

        });

        return;
    }

    // =====================================================
    // 결혼이민(F-6-1) 자가진단
    // =====================================================

    if (document.querySelector('input[name="f61Marriage"]')) {

        button.addEventListener("click", function () {

            const marriage =
                document.querySelector('input[name="f61Marriage"]:checked');

            const communication =
                document.querySelector('input[name="f61Communication"]:checked');

            const income =
                document.querySelector('input[name="f61Income"]:checked');

            const housing =
                document.querySelector('input[name="f61Housing"]:checked');

            const additional =
                document.querySelector('input[name="f61Additional"]:checked');


            // 모든 질문 답변 여부 확인
            if (
                !marriage ||
                !communication ||
                !income ||
                !housing ||
                !additional
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 혼인관계 또는 혼인의 진정성 확인 필요
            if (marriage.value === "no") {

                resultTitle = "혼인관계 및 혼인경위에 대한 검토가 필요합니다.";

                resultMessage =
                    "혼인관계의 성립 여부와 외국인 배우자 국적국에서 필요한 절차, " +
                    "실제 교제 및 혼인경위를 확인할 필요가 있습니다. " +
                    "관련 사실관계와 입증자료를 먼저 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ② 의사소통 요건
            else if (communication.value === "no") {

                resultTitle = "의사소통 요건에 대한 검토가 필요합니다.";

                resultMessage =
                    "의사소통 요건은 한국어능력뿐만 아니라 " +
                    "부부의 체류경력이나 사용하는 언어 등 구체적인 상황에 따라 " +
                    "인정 또는 심사면제 여부가 달라질 수 있으므로 " +
                    "추가적인 검토가 필요합니다.";

                resultClass = "result-check";
            }


            // ③ 소득요건
            else if (income.value === "no") {

                resultTitle = "소득요건의 보완 또는 면제 여부를 확인해야 합니다.";

                resultMessage =
                    "초청인의 소득이 기준에 미달하더라도 재산이나 " +
                    "일정한 가족의 소득·재산을 활용할 수 있는 경우가 있으며, " +
                    "상황에 따라 소득요건 심사가 면제되는 경우도 있으므로 " +
                    "구체적인 검토가 필요합니다.";

                resultClass = "result-check";
            }


            // ④ 주거요건
            else if (housing.value === "no") {

                resultTitle = "주거요건에 대한 준비가 필요합니다.";

                resultMessage =
                    "결혼 후 함께 생활할 주거지와 이를 입증할 수 있는 " +
                    "관련 자료를 준비할 필요가 있습니다. " +
                    "주거형태와 사용관계를 확인하여 신청자료를 준비하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 국제결혼 안내프로그램 등
            else if (additional.value === "no") {

                resultTitle = "추가 심사항목에 대한 확인이 필요합니다.";

                resultMessage =
                    "국제결혼 안내프로그램 이수 대상 여부와 " +
                    "건강상태·범죄경력 등 신청에 필요한 추가 심사항목을 " +
                    "확인하여야 합니다. 면제대상에 해당하는지도 함께 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ⑥ 잘 모르겠다는 답변이 하나라도 있는 경우
            else if (
                marriage.value === "unknown" ||
                communication.value === "unknown" ||
                income.value === "unknown" ||
                housing.value === "unknown" ||
                additional.value === "unknown"
            ) {

                resultTitle = "신청요건에 대한 사전 검토를 권장합니다.";

                resultMessage =
                    "현재 확인되지 않은 사항이 있습니다. " +
                    "혼인관계와 교제경위, 의사소통, 소득·주거 및 " +
                    "추가 심사항목을 확인하면 결혼이민(F-6-1) " +
                    "사증 신청 가능성을 보다 정확하게 판단할 수 있습니다.";

                resultClass = "result-check";
            }


            // ⑦ 기본사항 충족
            else {

                resultTitle = "기본적인 신청사항을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 결혼이민(F-6-1) 사증 신청을 위한 " +
                    "기본적인 사항은 확인된 것으로 보입니다. " +
                    "실제 사증 심사에서는 혼인의 진정성 및 관련 입증자료 등을 " +
                    "종합적으로 검토하게 됩니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=marriage-visa-f61"
            );

        });

        return;
    }

    // =====================================================
    // 결혼이민 배우자 단기초청(C-3-1) 자가진단
    // =====================================================

    if (document.querySelector('input[name="spouseVisitMarriage"]')) {

        button.addEventListener("click", function () {

            const marriage =
                document.querySelector('input[name="spouseVisitMarriage"]:checked');

            const f6Reason =
                document.querySelector('input[name="spouseVisitF6Reason"]:checked');

            const purpose =
                document.querySelector('input[name="spouseVisitPurpose"]:checked');

            const plan =
                document.querySelector('input[name="spouseVisitPlan"]:checked');

            const violation =
                document.querySelector('input[name="spouseVisitViolation"]:checked');


            // 모든 질문 답변 여부 확인
            if (
                !marriage ||
                !f6Reason ||
                !purpose ||
                !plan ||
                !violation
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 혼인관계가 유지되고 있지 않은 경우
            if (marriage.value === "no") {

                resultTitle = "혼인관계에 대한 검토가 필요합니다.";

                resultMessage =
                    "현재 답변상 결혼이민 배우자의 단기초청 업무에 " +
                    "해당하는지 확인이 필요합니다. " +
                    "혼인관계와 현재 부부의 상황을 먼저 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ② 과거 출입국·체류상 문제가 있는 경우
            else if (violation.value === "yes") {

                resultTitle = "출입국·체류이력에 대한 검토가 필요합니다.";

                resultMessage =
                    "과거 불법체류·불법취업 등 출입국 또는 체류상 문제가 있는 경우 " +
                    "사증 심사에 영향을 줄 수 있으므로 " +
                    "구체적인 사실관계와 과거 처분내용을 확인할 필요가 있습니다.";

                resultClass = "result-warning";
            }


            // ③ F-6 불허 또는 신청 곤란 사유가 불분명
            else if (f6Reason.value === "no") {

                resultTitle = "결혼비자와 단기초청의 관계를 먼저 검토해야 합니다.";

                resultMessage =
                    "현재 답변상 결혼이민(F-6-1) 사증을 신청하지 못하는 " +
                    "구체적인 사유가 확인되지 않습니다. " +
                    "단기초청이 필요한 이유와 현재 결혼비자 신청 가능 여부를 " +
                    "함께 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 단기초청 목적이 불분명
            else if (purpose.value === "no") {

                resultTitle = "단기초청의 목적과 필요성을 보완해야 합니다.";

                resultMessage =
                    "배우자를 현재 한국에 단기간 초청해야 하는 이유를 " +
                    "구체적으로 설명할 필요가 있습니다. " +
                    "입국목적과 초청 필요성을 뒷받침할 자료도 함께 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 체류계획이 불분명
            else if (plan.value === "no") {

                resultTitle = "체류계획에 대한 준비가 필요합니다.";

                resultMessage =
                    "예정 체류기간과 한국에서의 체류계획을 " +
                    "구체적으로 정리할 필요가 있습니다. " +
                    "초청목적과 체류계획이 서로 일관되도록 준비하는 것이 중요합니다.";

                resultClass = "result-check";
            }


            // ⑥ 잘 모르겠다는 답변이 있는 경우
            else if (
                marriage.value === "unknown" ||
                f6Reason.value === "unknown" ||
                purpose.value === "unknown" ||
                plan.value === "unknown" ||
                violation.value === "unknown"
            ) {

                resultTitle = "단기초청 가능성에 대한 사전 검토를 권장합니다.";

                resultMessage =
                    "현재 확인되지 않은 사항이 있습니다. " +
                    "혼인관계, 결혼비자를 신청하기 어려운 사유, " +
                    "단기초청 목적과 체류계획 등을 확인하면 " +
                    "신청 가능성을 보다 구체적으로 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ⑦ 기본사항 확인
            else {

                resultTitle = "기본적인 단기초청 사항을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 결혼이민 배우자 단기초청(C-3-1)을 " +
                    "검토하기 위한 기본사항은 확인된 것으로 보입니다. " +
                    "실제 사증 발급 여부는 초청목적, 결혼비자 신청이 어려운 사유, " +
                    "체류계획 및 관련 입증자료 등을 종합하여 심사됩니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=spouse-short-visit"
            );

        });

        return;
    }

    // =====================================================
    // 화학물질 확인명세서 자가진단
    // =====================================================

    if (document.querySelector('input[name="chemicalManufactureImport"]')) {

        button.addEventListener("click", function () {

            const manufactureImport =
                document.querySelector('input[name="chemicalManufactureImport"]:checked');

            const msds =
                document.querySelector('input[name="chemicalMsds"]:checked');

            const composition =
                document.querySelector('input[name="chemicalComposition"]:checked');

            const regulation =
                document.querySelector('input[name="chemicalRegulation"]:checked');

            const submission =
                document.querySelector('input[name="chemicalSubmission"]:checked');


            // 모든 질문 답변 여부 확인
            if (
                !manufactureImport ||
                !msds ||
                !composition ||
                !regulation ||
                !submission
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 제조·수입 대상이 아닌 경우
            if (manufactureImport.value === "no") {

                resultTitle = "확인명세서 제출 대상 여부를 먼저 확인해야 합니다.";

                resultMessage =
                    "현재 답변상 화학물질 또는 화학제품의 제조·수입에 " +
                    "해당하지 않는 것으로 보입니다. " +
                    "제품과 거래형태를 확인하여 화학물질 확인명세서 " +
                    "제출 대상인지 먼저 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ② MSDS 또는 성분명세서가 없는 경우
            else if (msds.value === "no") {

                resultTitle = "제품의 성분자료 확보가 필요합니다.";

                resultMessage =
                    "화학물질 확인을 위해서는 제품에 포함된 성분을 " +
                    "확인할 수 있는 자료가 필요합니다. " +
                    "MSDS 또는 성분명세서 등 제품의 성분자료를 " +
                    "우선 확보하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ③ 물질명·CAS No.·함량 확인 불가
            else if (composition.value === "no") {

                resultTitle = "제품의 성분정보에 대한 추가 확인이 필요합니다.";

                resultMessage =
                    "제품에 포함된 물질명, CAS No. 및 함량정보를 " +
                    "확인할 수 있어야 화학물질별 해당사항을 검토할 수 있습니다. " +
                    "제조사 또는 공급자로부터 성분정보를 추가로 확보할 필요가 있습니다.";

                resultClass = "result-warning";
            }


            // ④ 규제대상 검토를 하지 않은 경우
            else if (regulation.value === "no") {

                resultTitle = "화학물질별 규제사항 검토가 필요합니다.";

                resultMessage =
                    "제품에 포함된 각 화학물질에 대해 기존·신규화학물질 여부와 " +
                    "관련 규제대상 물질 해당 여부를 확인할 필요가 있습니다. " +
                    "성분별 검토 후 확인명세서 작성 여부를 판단하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 제출 준비가 되지 않은 경우
            else if (submission.value === "no") {

                resultTitle = "확인명세서 작성 및 제출 준비가 필요합니다.";

                resultMessage =
                    "제품과 성분자료가 확보되어 있다면 이를 바탕으로 " +
                    "화학물질정보처리시스템에 제품 및 성분정보를 등록하고 " +
                    "확인명세서 제출을 준비할 수 있습니다.";

                resultClass = "result-check";
            }


            // ⑥ 잘 모르겠다는 답변이 있는 경우
            else if (
                manufactureImport.value === "unknown" ||
                msds.value === "unknown" ||
                composition.value === "unknown" ||
                regulation.value === "unknown" ||
                submission.value === "unknown"
            ) {

                resultTitle = "화학물질 확인명세서에 대한 사전 검토를 권장합니다.";

                resultMessage =
                    "현재 확인되지 않은 사항이 있습니다. " +
                    "제품의 제조·수입 형태와 MSDS, 성분명, CAS No., 함량정보 등을 " +
                    "확인하면 확인명세서 제출에 필요한 사항을 " +
                    "보다 구체적으로 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ⑦ 기본 준비사항이 모두 확인된 경우
            else {

                resultTitle = "기본적인 제출 준비사항을 확인하셨습니다.";

                resultMessage =
                    "현재 입력하신 내용상 화학물질 확인명세서 제출을 검토하기 위한 " +
                    "기본적인 자료는 준비된 것으로 보입니다. " +
                    "실제 제출 전에는 제품별 성분정보와 화학물질별 해당사항을 " +
                    "구체적으로 확인하는 것이 필요합니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=chemical-confirmation"
            );

        });

        return;
    }

    // =====================================================
    // MSDS 등록 자가진단
    // =====================================================

    if (document.querySelector('input[name="msdsProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="msdsProduct"]:checked');

            const ingredientInfo =
                document.querySelector('input[name="msdsIngredientInfo"]:checked');

            const supplierInfo =
                document.querySelector('input[name="msdsSupplierInfo"]:checked');

            const amountInfo =
                document.querySelector('input[name="msdsAmountInfo"]:checked');

            const needHelp =
                document.querySelector('input[name="msdsNeedHelp"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !ingredientInfo ||
                !supplierInfo ||
                !amountInfo ||
                !needHelp
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 대상 제품 자체가 불분명
            if (product.value === "no") {

                resultTitle = "MSDS 작성 대상부터 확인해 보세요.";

                resultMessage =
                    "현재 MSDS를 작성하거나 등록하려는 제품이 명확하지 않습니다. " +
                    "어떤 제품에 대한 MSDS가 필요한지 먼저 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ② 성분자료도 없고 공급자로부터 받을 수도 없음
            else if (
                ingredientInfo.value === "no" &&
                supplierInfo.value === "no"
            ) {

                resultTitle = "제품의 성분자료 확보가 우선 필요합니다.";

                resultMessage =
                    "현재 제품에 어떤 성분이 들어 있는지 확인하기 어려운 상태입니다. " +
                    "제조사나 공급업체를 통해 제품의 성분자료를 확보할 수 있는지 " +
                    "먼저 확인하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ③ 성분자료가 아직 없음
            else if (ingredientInfo.value === "no") {

                resultTitle = "제품의 성분자료를 먼저 준비해 주세요.";

                resultMessage =
                    "MSDS를 작성하려면 제품에 어떤 성분이 들어 있는지 " +
                    "확인할 수 있는 자료가 필요합니다. " +
                    "제조사나 공급업체로부터 관련 자료를 받아 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 여러 성분의 함량을 확인할 수 없음
            else if (amountInfo.value === "no") {

                resultTitle = "각 성분의 함량을 추가로 확인해 주세요.";

                resultMessage =
                    "여러 성분으로 이루어진 제품이라면 각 성분이 얼마나 들어 있는지 " +
                    "확인하는 것이 필요합니다. 가지고 있는 자료에서 확인되지 않는다면 " +
                    "제조사나 공급업체에 추가 자료를 요청하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 잘 모르겠다는 답변이 있는 경우
            else if (
                product.value === "unknown" ||
                ingredientInfo.value === "unknown" ||
                supplierInfo.value === "unknown" ||
                amountInfo.value === "unknown" ||
                needHelp.value === "unknown"
            ) {

                resultTitle = "가지고 있는 자료를 먼저 검토해 보는 것이 좋습니다.";

                resultMessage =
                    "확인하기 어려운 사항이 있습니다. " +
                    "현재 가지고 있는 제품자료를 검토하면 MSDS 작성에 " +
                    "추가로 필요한 자료가 무엇인지 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // ⑥ 자료는 있으나 작성·등록이 어려운 경우
            else if (needHelp.value === "yes") {

                resultTitle = "MSDS 작성·등록에 대한 상담을 권장합니다.";

                resultMessage =
                    "제품과 성분에 관한 기본자료는 가지고 있지만 " +
                    "MSDS 작성·등록 방법에 어려움이 있는 것으로 보입니다. " +
                    "보유자료를 기준으로 작성에 필요한 사항을 검토할 수 있습니다.";

                resultClass = "result-success";
            }


            // ⑦ 기본적인 준비가 된 경우
            else {

                resultTitle = "MSDS 작성에 필요한 기본자료를 확인하셨습니다.";

                resultMessage =
                    "현재 답변상 제품과 성분에 관한 기본자료는 " +
                    "준비되어 있는 것으로 보입니다. " +
                    "실제 작성 전에는 제품자료와 구성성분 정보를 구체적으로 확인해 주세요.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=msds-registration"
            );

        });

        return;
    }

    // =====================================================
    // 인체등유해성물질 수입신고 자가진단
    // =====================================================

    if (document.querySelector('input[name="hazardousProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="hazardousProduct"]:checked');

            const ingredients =
                document.querySelector('input[name="hazardousIngredients"]:checked');

            const amount =
                document.querySelector('input[name="hazardousAmount"]:checked');

            const importAmount =
                document.querySelector('input[name="hazardousImportAmount"]:checked');

            const reportCheck =
                document.querySelector('input[name="hazardousReportCheck"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !ingredients ||
                !amount ||
                !importAmount ||
                !reportCheck
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // 수입하려는 제품이 없는 경우
            if (product.value === "no") {

                resultTitle = "수입하려는 제품부터 확인해 주세요.";

                resultMessage =
                    "현재 수입하려는 화학제품이 정해져 있지 않은 것으로 보입니다. " +
                    "제품이 정해진 후 제품자료를 기준으로 수입신고 필요 여부를 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // 성분자료가 없는 경우
            else if (ingredients.value === "no") {

                resultTitle = "제품의 성분자료를 먼저 준비해 주세요.";

                resultMessage =
                    "수입신고 대상 여부를 검토하려면 제품에 어떤 성분이 들어 있는지 " +
                    "확인할 수 있는 자료가 필요합니다. 제조사나 공급업체를 통해 " +
                    "성분자료를 확보하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // 성분별 함유량을 모르는 경우
            else if (amount.value === "no") {

                resultTitle = "각 성분의 함유량을 확인해 주세요.";

                resultMessage =
                    "제품에 포함된 성분뿐 아니라 각 성분이 얼마나 들어 있는지 " +
                    "확인할 필요가 있습니다. 가지고 있는 제품자료에서 확인되지 않는다면 " +
                    "제조사나 공급업체에 추가 자료를 요청하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 수입예정량을 모르는 경우
            else if (importAmount.value === "no") {

                resultTitle = "수입 예정량을 확인해 주세요.";

                resultMessage =
                    "수입신고를 준비하려면 제품을 어느 정도 수입할 예정인지 " +
                    "확인할 필요가 있습니다. 예상되는 수입량을 먼저 확인해 주세요.";

                resultClass = "result-check";
            }


            // 신고대상 여부를 확인하지 않은 경우
            else if (reportCheck.value === "no") {

                resultTitle = "수입신고 대상 여부를 확인해 보세요.";

                resultMessage =
                    "제품의 성분과 함유량을 기준으로 인체등유해성물질 수입신고 " +
                    "대상에 해당하는지 검토할 필요가 있습니다. " +
                    "보유하고 있는 제품자료를 기준으로 확인할 수 있습니다.";

                resultClass = "result-success";
            }


            // 잘 모르겠다는 답변이 하나라도 있는 경우
            else if (
                product.value === "unknown" ||
                ingredients.value === "unknown" ||
                amount.value === "unknown" ||
                importAmount.value === "unknown" ||
                reportCheck.value === "unknown"
            ) {

                resultTitle = "가지고 있는 제품자료를 검토해 보는 것이 좋습니다.";

                resultMessage =
                    "현재 답변만으로는 수입신고 필요 여부를 판단하기 어려운 사항이 있습니다. " +
                    "제품의 성분자료와 수입계획을 함께 검토하면 필요한 절차를 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 기본자료가 모두 준비된 경우
            else {

                resultTitle = "수입신고 검토를 위한 기본자료가 준비되어 있습니다.";

                resultMessage =
                    "현재 답변상 제품의 성분, 함유량 및 수입예정량을 " +
                    "확인할 수 있는 것으로 보입니다. 실제 신고 전에는 " +
                    "해당 제품의 신고 대상 여부와 제출자료를 구체적으로 확인해 주세요.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=hazardous-import"
            );

        });

        return;
    }

    // =====================================================
    // 기존물질 사전신고 자가진단
    // =====================================================

    if (document.querySelector('input[name="existingProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="existingProduct"]:checked');

            const ingredients =
                document.querySelector('input[name="existingIngredients"]:checked');

            const amount =
                document.querySelector('input[name="existingAmount"]:checked');

            const existingCheck =
                document.querySelector('input[name="existingCheck"]:checked');

            const importAmount =
                document.querySelector('input[name="existingImportAmount"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !ingredients ||
                !amount ||
                !existingCheck ||
                !importAmount
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 제조·수입 대상이 정해지지 않은 경우
            if (product.value === "no") {

                resultTitle = "제조·수입하려는 제품부터 확인해 주세요.";

                resultMessage =
                    "현재 제조하거나 수입하려는 화학물질 또는 제품이 " +
                    "정해져 있지 않은 것으로 보입니다. 제품이 정해진 후 " +
                    "관련 자료를 기준으로 사전신고 필요 여부를 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 성분자료가 없는 경우
            else if (ingredients.value === "no") {

                resultTitle = "제품의 성분자료를 먼저 준비해 주세요.";

                resultMessage =
                    "어떤 화학물질이 들어 있는지 확인할 수 있어야 " +
                    "기존물질 여부와 필요한 절차를 검토할 수 있습니다. " +
                    "제조사나 공급업체를 통해 성분자료를 확보하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ③ 함유량을 확인할 수 없는 경우
            else if (amount.value === "no") {

                resultTitle = "각 성분의 함유량을 확인해 주세요.";

                resultMessage =
                    "여러 성분으로 이루어진 제품이라면 각 성분이 얼마나 " +
                    "들어 있는지 확인할 필요가 있습니다. 제품자료에서 확인되지 않는다면 " +
                    "제조사나 공급업체에 추가 자료를 요청하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 기존물질 여부를 확인하지 않은 경우
            else if (existingCheck.value === "no") {

                resultTitle = "기존물질 해당 여부를 확인해 보세요.";

                resultMessage =
                    "해당 화학물질이 기존물질인지 확인하지 않은 상태입니다. " +
                    "보유하고 있는 성분자료를 기준으로 물질정보를 확인한 후 " +
                    "사전신고에 필요한 절차를 검토하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // ⑤ 제조·수입 예정량을 모르는 경우
            else if (importAmount.value === "no") {

                resultTitle = "제조·수입 예정량을 확인해 주세요.";

                resultMessage =
                    "사전신고를 준비하려면 해당 화학물질을 어느 정도 " +
                    "제조하거나 수입할 예정인지 확인할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // 잘 모르겠다는 답변이 하나라도 있는 경우
            else if (
                product.value === "unknown" ||
                ingredients.value === "unknown" ||
                amount.value === "unknown" ||
                existingCheck.value === "unknown" ||
                importAmount.value === "unknown"
            ) {

                resultTitle = "가지고 있는 자료를 먼저 검토해 보는 것이 좋습니다.";

                resultMessage =
                    "현재 답변 중 확인하기 어려운 사항이 있습니다. " +
                    "제품의 성분자료와 제조·수입 계획을 함께 검토하면 " +
                    "기존물질 여부와 필요한 절차를 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 기본자료가 모두 준비된 경우
            else {

                resultTitle = "사전신고 검토를 위한 기본자료가 준비되어 있습니다.";

                resultMessage =
                    "현재 답변상 제품의 성분정보와 제조·수입 예정량을 " +
                    "확인할 수 있는 것으로 보입니다. 실제 신고 전에는 " +
                    "해당 물질의 정보와 필요한 신고사항을 구체적으로 검토해 주세요.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=existing-chemical-import"
            );

        });

        return;
    }

    // =====================================================
    // 안전확인대상생활화학제품 신고 자가진단
    // =====================================================

    if (document.querySelector('input[name="consumerProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="consumerProduct"]:checked');

            const target =
                document.querySelector('input[name="consumerTarget"]:checked');

            const safety =
                document.querySelector('input[name="consumerSafety"]:checked');

            const ingredients =
                document.querySelector('input[name="consumerIngredients"]:checked');

            const documents =
                document.querySelector('input[name="consumerDocuments"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !target ||
                !safety ||
                !ingredients ||
                !documents
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 대상 제품이 아직 정해지지 않은 경우
            if (product.value === "no") {

                resultTitle = "대상 제품부터 확인해 보세요.";

                resultMessage =
                    "현재 제조하거나 수입하려는 제품이 명확하지 않은 것으로 보입니다. " +
                    "향후 취급하려는 제품이 정해지면 신고 대상 여부부터 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 신고 대상 여부를 확인하지 않은 경우
            else if (target.value === "no") {

                resultTitle = "신고 대상 제품인지 먼저 확인해 보세요.";

                resultMessage =
                    "제품의 종류와 용도를 기준으로 안전확인대상생활화학제품 신고가 " +
                    "필요한 제품인지 검토하는 것이 좋습니다. " +
                    "제품정보를 가지고 상담을 통해 확인할 수 있습니다.";

                resultClass = "result-success";
            }


            // ③ 안전기준 확인자료가 없는 경우
            else if (safety.value === "no") {

                resultTitle = "안전기준 확인을 위한 준비가 필요합니다.";

                resultMessage =
                    "현재 제품의 안전기준을 확인할 수 있는 검사 또는 관련 자료가 " +
                    "준비되지 않은 것으로 보입니다. 필요한 확인절차와 준비자료를 " +
                    "먼저 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 성분자료가 없는 경우
            else if (ingredients.value === "no") {

                resultTitle = "제품의 성분자료를 준비해 주세요.";

                resultMessage =
                    "제품에 어떤 성분이 들어 있는지 확인할 수 있는 자료가 필요합니다. " +
                    "제조사나 공급업체를 통해 관련 자료를 확보한 후 " +
                    "신고에 필요한 내용을 검토하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ⑤ 표시사항·제품사진 등 자료가 없는 경우
            else if (documents.value === "no") {

                resultTitle = "신고에 필요한 자료를 추가로 준비해 주세요.";

                resultMessage =
                    "제품의 표시내용이나 제품사진 등 신고 과정에서 필요한 자료가 " +
                    "아직 충분히 준비되지 않은 것으로 보입니다. " +
                    "현재 가지고 있는 자료부터 검토하여 부족한 부분을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 잘 모르겠다는 답변이 하나라도 있는 경우
            else if (
                product.value === "unknown" ||
                target.value === "unknown" ||
                safety.value === "unknown" ||
                ingredients.value === "unknown" ||
                documents.value === "unknown"
            ) {

                resultTitle = "현재 가지고 있는 제품자료를 검토해 보는 것이 좋습니다.";

                resultMessage =
                    "확인하기 어려운 사항이 있습니다. 제품의 종류와 용도, 성분자료 등을 " +
                    "함께 검토하면 신고 대상 여부와 추가로 준비할 사항을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 기본적인 준비가 된 경우
            else {

                resultTitle = "신고 검토를 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 제품정보와 안전기준 관련 자료, 성분자료 및 " +
                    "신고자료를 준비하고 있는 것으로 보입니다. 실제 신고 전에는 " +
                    "각 자료의 내용과 신고사항을 구체적으로 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 어떤 진단결과에서도 상담 신청 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=consumer-chemical-product"
            );

        });

        return;
    }

    // =====================================================
    // 유해화학물질 운반업 허가 자가진단
    // =====================================================

    if (document.querySelector('input[name="transportChemical"]')) {

        button.addEventListener("click", function () {

            const chemical =
                document.querySelector('input[name="transportChemical"]:checked');

            const vehicle =
                document.querySelector('input[name="transportVehicle"]:checked');

            const inspection =
                document.querySelector('input[name="transportInspection"]:checked');

            const business =
                document.querySelector('input[name="transportBusiness"]:checked');

            const manager =
                document.querySelector('input[name="transportManager"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !chemical ||
                !vehicle ||
                !inspection ||
                !business ||
                !manager
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 운반하려는 물질이 정해지지 않은 경우
            if (chemical.value === "no") {

                resultTitle = "운반하려는 물질부터 확인해 보세요.";

                resultMessage =
                    "운반하려는 화학물질이 정해져야 해당 물질과 취급예정량 등을 기준으로 " +
                    "운반업 허가에 필요한 사항을 구체적으로 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 운반차량이 준비되지 않은 경우
            else if (vehicle.value === "no") {

                resultTitle = "운반차량 준비가 필요합니다.";

                resultMessage =
                    "유해화학물질 운반업 허가를 위해서는 실제 운반에 사용할 차량과 " +
                    "관련 시설 및 장비의 준비상태를 확인할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ③ 설치검사 적합판정을 받지 않은 경우
            else if (inspection.value === "no") {

                resultTitle = "운반차량 설치검사 절차를 확인해 주세요.";

                resultMessage =
                    "운반차량에 대한 필요한 설치검사와 적합판정이 아직 완료되지 않은 것으로 보입니다. " +
                    "차량의 검사 준비사항과 관련 절차를 먼저 확인하는 것이 좋습니다.";

                resultClass = "result-warning";
            }


            // ④ 운송사업허가·차고지 등이 준비되지 않은 경우
            else if (business.value === "no") {

                resultTitle = "운송사업 관련 준비사항을 확인해 주세요.";

                resultMessage =
                    "화물자동차 운송사업허가와 차고지 등 운반업 허가와 관련된 " +
                    "운송사업 기반이 준비되어 있는지 확인할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ⑤ 관리자 등이 준비되지 않은 경우
            else if (manager.value === "no") {

                resultTitle = "관리자 등 인력요건을 확인해 주세요.";

                resultMessage =
                    "유해화학물질 운반업 허가에 필요한 관리자 등 담당 인력이 " +
                    "준비되어 있는지 확인하고 관련 요건을 검토할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // 하나라도 잘 모르겠다고 답한 경우
            else if (
                chemical.value === "unknown" ||
                vehicle.value === "unknown" ||
                inspection.value === "unknown" ||
                business.value === "unknown" ||
                manager.value === "unknown"
            ) {

                resultTitle = "허가요건을 조금 더 확인해 보는 것이 좋습니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 운반하려는 물질과 차량, " +
                    "설치검사 여부 및 사업 준비상태를 함께 검토하면 " +
                    "추가로 준비할 사항을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle = "운반업 허가 검토를 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 운반물질과 차량, 설치검사 및 관련 사업·인력 준비가 " +
                    "이루어진 것으로 보입니다. 실제 허가신청 전에는 세부 요건과 " +
                    "제출자료를 최종적으로 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 어떤 진단결과에서도 상담 신청 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=hazardous-chemical-transport"
            );

        });

        return;
    }

    // =====================================================
    // 유해화학물질 알선판매업 신고 자가진단
    // =====================================================

    if (document.querySelector('input[name="brokerChemical"]')) {

        button.addEventListener("click", function () {

            const chemical =
                document.querySelector('input[name="brokerChemical"]:checked');

            const location =
                document.querySelector('input[name="brokerLocation"]:checked');

            const msds =
                document.querySelector('input[name="brokerMsds"]:checked');

            const storage =
                document.querySelector('input[name="brokerStorage"]:checked');

            const manager =
                document.querySelector('input[name="brokerManager"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !chemical ||
                !location ||
                !msds ||
                !storage ||
                !manager
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 판매하려는 물질이 정해지지 않은 경우
            if (chemical.value === "no") {

                resultTitle = "판매하려는 물질부터 확인해 보세요.";

                resultMessage =
                    "판매하려는 유해화학물질이 정해져야 물질의 종류와 " +
                    "취급예정량 등을 기준으로 신고에 필요한 사항을 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 사업장 입지 확인이 되지 않은 경우
            else if (location.value === "no") {

                resultTitle = "사업장 소재지부터 확인해 보세요.";

                resultMessage =
                    "판매업을 하려는 사무실에서 해당 영업이 가능한지 " +
                    "먼저 확인할 필요가 있습니다. 사업장 소재지에 따라 " +
                    "판매업이 제한될 수 있으므로 사전 검토가 중요합니다.";

                resultClass = "result-warning";
            }


            // ③ MSDS 등 물질자료가 없는 경우
            else if (msds.value === "no") {

                resultTitle = "판매하려는 물질의 자료를 준비해 주세요.";

                resultMessage =
                    "판매하려는 물질을 확인할 수 있는 MSDS 등 관련 자료가 필요합니다. " +
                    "현재 가지고 있는 제품자료부터 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 보관방식이 준비되지 않은 경우
            else if (storage.value === "no") {

                resultTitle = "물질의 보관방식을 확인해 주세요.";

                resultMessage =
                    "취급시설 없는 판매업의 형태와 실제 물질의 보관방식이 " +
                    "맞는지 확인할 필요가 있습니다. 위탁하여 보관하는 경우에는 " +
                    "위탁 보관·저장 관계도 함께 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 관리자 준비가 되지 않은 경우
            else if (manager.value === "no") {

                resultTitle = "관리자 선임 등 신고 준비사항을 확인해 주세요.";

                resultMessage =
                    "유해화학물질 관리자 선임 등 신고와 함께 준비해야 할 사항이 있습니다. " +
                    "현재 사업형태를 기준으로 필요한 준비사항을 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 하나라도 잘 모르겠다고 답한 경우
            else if (
                chemical.value === "unknown" ||
                location.value === "unknown" ||
                msds.value === "unknown" ||
                storage.value === "unknown" ||
                manager.value === "unknown"
            ) {

                resultTitle = "신고요건을 조금 더 확인해 보는 것이 좋습니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 판매하려는 물질과 " +
                    "사업장, 보관방식 및 준비자료를 함께 검토하면 " +
                    "추가로 준비할 사항을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle = "판매업 신고 검토를 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 판매물질과 사업장, 물질자료, 보관방식 및 " +
                    "관리자 관련 준비가 이루어진 것으로 보입니다. 실제 신고 전에는 " +
                    "세부 신고요건과 제출자료를 최종적으로 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 어떤 진단결과에서도 상담 신청 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=chemical-broker-sales"
            );

        });

        return;
    }

    // =====================================================
    // 전자담배 판매업 신고 자가진단
    // =====================================================

    if (document.querySelector('input[name="ecigProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="ecigProduct"]:checked');

            const nicotine =
                document.querySelector('input[name="ecigNicotine"]:checked');

            const msds =
                document.querySelector('input[name="ecigMsds"]:checked');

            const storage =
                document.querySelector('input[name="ecigStorage"]:checked');

            const business =
                document.querySelector('input[name="ecigBusiness"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !nicotine ||
                !msds ||
                !storage ||
                !business
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 판매제품이 정해지지 않은 경우
            if (product.value === "no") {

                resultTitle = "판매하려는 제품부터 확인해 보세요.";

                resultMessage =
                    "판매하려는 전자담배 제품이 정해져야 니코틴 성분과 함량 등을 " +
                    "확인하여 신고 대상 여부를 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 니코틴 성분·함량 확인이 안 된 경우
            else if (nicotine.value === "no") {

                resultTitle = "니코틴 성분과 함량을 먼저 확인해 주세요.";

                resultMessage =
                    "전자담배 판매업 신고 대상 여부를 판단하려면 제품에 포함된 " +
                    "니코틴의 성분과 함량을 확인하는 것이 중요합니다.";

                resultClass = "result-warning";
            }


            // ③ MSDS 등 자료가 없는 경우
            else if (msds.value === "no") {

                resultTitle = "제품의 성분자료를 준비해 주세요.";

                resultMessage =
                    "판매하려는 제품의 니코틴 등 성분을 확인할 수 있는 " +
                    "MSDS 등의 자료를 준비하여 검토할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ④ 보관방식이 정해지지 않은 경우
            else if (storage.value === "no") {

                resultTitle = "제품의 보관방법을 확인해 주세요.";

                resultMessage =
                    "제품을 어디에 얼마나 보관하고 어떻게 취급할 것인지에 따라 " +
                    "확인해야 할 사항이 달라질 수 있으므로 보관방법을 먼저 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 사업장·관리자 준비가 안 된 경우
            else if (business.value === "no") {

                resultTitle = "사업장과 신고 준비사항을 확인해 주세요.";

                resultMessage =
                    "판매하려는 사업장과 관리자 등 신고에 필요한 사항을 " +
                    "추가로 확인하고 준비할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // 하나라도 잘 모르겠습니다
            else if (
                product.value === "unknown" ||
                nicotine.value === "unknown" ||
                msds.value === "unknown" ||
                storage.value === "unknown" ||
                business.value === "unknown"
            ) {

                resultTitle = "신고 대상 여부를 조금 더 확인해 보는 것이 좋습니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 제품의 니코틴 성분과 함량, " +
                    "제품자료 및 사업장 상황을 함께 검토하면 신고에 필요한 사항을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle = "전자담배 판매업 신고 검토를 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 제품정보와 니코틴 성분, 제품자료, 보관방법 및 " +
                    "사업장 관련 준비가 이루어진 것으로 보입니다. 실제 신고 전에는 " +
                    "신고 대상 여부와 세부 요건을 최종 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 모든 결과에서 상담 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=e-cigarette-sales"
            );

        });

        return;
    }

    // =====================================================
    // 유해화학물질 시약 판매업 신고 자가진단
    // =====================================================

    if (document.querySelector('input[name="reagentProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="reagentProduct"]:checked');

            const purpose =
                document.querySelector('input[name="reagentPurpose"]:checked');

            const hazardous =
                document.querySelector('input[name="reagentHazardous"]:checked');

            const documents =
                document.querySelector('input[name="reagentDocuments"]:checked');

            const storage =
                document.querySelector('input[name="reagentStorage"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !purpose ||
                !hazardous ||
                !documents ||
                !storage
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 판매할 시약이 정해지지 않은 경우
            if (product.value === "no") {

                resultTitle = "판매하려는 시약부터 확인해 보세요.";

                resultMessage =
                    "판매하려는 시약이 정해져야 해당 물질이 유해화학물질인지와 " +
                    "시약 판매업 신고 대상에 해당하는지를 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 시험용·연구용·검사용이 아닌 경우
            else if (purpose.value === "no") {

                resultTitle = "시약의 판매용도를 다시 확인해 주세요.";

                resultMessage =
                    "유해화학물질 시약 판매업 신고는 시험용·연구용·검사용으로 " +
                    "판매하는 경우를 대상으로 합니다. 다른 용도로 판매하려는 경우에는 " +
                    "적용되는 영업절차를 별도로 검토할 필요가 있습니다.";

                resultClass = "result-warning";
            }


            // ③ 유해화학물질이 아니라고 확인한 경우
            else if (hazardous.value === "no") {

                resultTitle = "시약의 유해화학물질 해당 여부를 확인해 주세요.";

                resultMessage =
                    "현재 답변상 유해화학물질 시약 판매업 신고 대상과 다를 수 있습니다. " +
                    "판매하려는 시약의 성분과 물질정보를 기준으로 적용되는 절차를 " +
                    "확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ MSDS·예상 판매량 자료가 없는 경우
            else if (documents.value === "no") {

                resultTitle = "시약의 관련 자료를 준비해 주세요.";

                resultMessage =
                    "신고를 위해서는 물질별 MSDS와 취급예정량 등을 확인할 수 있는 " +
                    "자료가 필요하므로 현재 보유한 제품자료부터 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 직접 보관하면서 보관방법이 준비되지 않은 경우
            else if (storage.value === "no") {

                resultTitle = "시약의 보관방식을 확인해 주세요.";

                resultMessage =
                    "시약을 직접 보관하는 경우에는 보관·저장시설과 관련하여 " +
                    "추가로 확인하거나 준비해야 할 사항이 있을 수 있습니다.";

                resultClass = "result-check";
            }


            // 하나라도 잘 모르겠습니다
            else if (
                product.value === "unknown" ||
                purpose.value === "unknown" ||
                hazardous.value === "unknown" ||
                documents.value === "unknown" ||
                storage.value === "unknown"
            ) {

                resultTitle = "시약 판매업 신고 대상 여부를 조금 더 확인해 보세요.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 판매하려는 시약의 성분과 " +
                    "판매용도, MSDS 및 보관방식 등을 함께 검토하면 " +
                    "신고 대상 여부와 필요한 준비사항을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle = "시약 판매업 신고 검토를 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 판매하려는 시약과 판매용도, 물질정보 및 " +
                    "관련 자료가 준비된 것으로 보입니다. 실제 신고 전에는 " +
                    "신고 대상 여부와 세부 제출자료를 최종 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 어떤 진단결과에서도 상담 신청 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=reagent-sales"
            );

        });

        return;
    }

    // =====================================================
    // 조달업체 입찰참가자격 등록 자가진단
    // =====================================================

    if (document.querySelector('input[name="procurementTarget"]')) {

        button.addEventListener("click", function () {

            const target =
                document.querySelector('input[name="procurementTarget"]:checked');

            const type =
                document.querySelector('input[name="procurementType"]:checked');

            const license =
                document.querySelector('input[name="procurementLicense"]:checked');

            const business =
                document.querySelector('input[name="procurementBusiness"]:checked');

            const manufacture =
                document.querySelector('input[name="procurementManufacture"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !target ||
                !type ||
                !license ||
                !business ||
                !manufacture
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 입찰하려는 분야가 정해지지 않은 경우
            if (target.value === "no") {

                resultTitle = "입찰하려는 분야부터 확인해 보세요.";

                resultMessage =
                    "입찰참가자격 등록을 위해서는 먼저 어떤 물품·공사·용역에 " +
                    "참여하려는지 확인하는 것이 좋습니다. 사업내용을 기준으로 " +
                    "등록해야 할 분야를 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ③ 인허가·등록 확인이 안 된 경우
            else if (license.value === "no") {

                resultTitle = "관련 인허가·등록 여부를 확인해 주세요.";

                resultMessage =
                    "등록하려는 업종에 따라 별도의 인허가나 등록이 필요한 경우가 있습니다. " +
                    "입찰하려는 사업내용을 기준으로 필요한 자격과 준비자료를 " +
                    "먼저 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 사업자 기본자료가 준비되지 않은 경우
            else if (business.value === "no") {

                resultTitle = "사업자 기본자료를 먼저 준비해 주세요.";

                resultMessage =
                    "입찰참가자격 등록을 위해서는 사업자와 대표자 등의 기본정보를 " +
                    "확인할 수 있어야 합니다. 현재 사업자 정보를 먼저 정리해 주세요.";

                resultClass = "result-check";
            }


            // 하나라도 잘 모르겠습니다가 있는 경우
            else if (
                target.value === "unknown" ||
                type.value === "unknown" ||
                license.value === "unknown" ||
                business.value === "unknown" ||
                manufacture.value === "unknown"
            ) {

                resultTitle = "등록분야와 준비사항을 조금 더 확인해 보세요.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 입찰하려는 사업내용과 " +
                    "공급·제조 여부, 관련 인허가 등을 함께 검토하면 " +
                    "필요한 입찰참가자격과 준비사항을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 또는 ⑤만 아니오인 경우
            else if (
                type.value === "no" ||
                manufacture.value === "no"
            ) {

                resultTitle = "등록하려는 사업분야를 구체적으로 확인해 보세요.";

                resultMessage =
                    "물품을 공급하거나 직접 제조하는 경우에는 공급물품·제조물품 등록을 " +
                    "구분하여 검토할 필요가 있습니다. 공사·용역을 등록하려는 경우에는 " +
                    "제조 관련 자료가 해당되지 않을 수 있으므로 사업내용에 맞춰 " +
                    "등록분야를 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle = "입찰참가자격 등록을 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 입찰하려는 분야와 사업자 정보 및 관련 준비사항이 " +
                    "확인된 것으로 보입니다. 실제 신청 전에는 등록할 물품·업종과 " +
                    "필요한 제출자료를 최종 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 모든 진단결과에서 상담 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=procurement-bid-registration"
            );

        });

        return;
    }

    // =====================================================
    // 물품식별번호 등록 자가진단
    // =====================================================

    if (document.querySelector('input[name="productItem"]')) {

        button.addEventListener("click", function () {

            const item =
                document.querySelector('input[name="productItem"]:checked');

            const classification =
                document.querySelector('input[name="productClassification"]:checked');

            const specification =
                document.querySelector('input[name="productSpecification"]:checked');

            const documents =
                document.querySelector('input[name="productDocuments"]:checked');

            const attributes =
                document.querySelector('input[name="productAttributes"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !item ||
                !classification ||
                !specification ||
                !documents ||
                !attributes
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 등록할 제품이 정해지지 않은 경우
            if (item.value === "no") {

                resultTitle = "등록하려는 제품부터 확인해 주세요.";

                resultMessage =
                    "물품식별번호 등록을 위해서는 먼저 등록하려는 제품이 " +
                    "구체적으로 정해져 있어야 제품에 맞는 물품분류와 " +
                    "필요한 제품정보를 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 물품분류를 확인하지 못한 경우
            else if (classification.value === "no") {

                resultTitle = "제품에 맞는 물품분류를 확인해 보세요.";

                resultMessage =
                    "등록하려는 제품에 맞는 물품분류와 세부품명을 확인할 필요가 있습니다. " +
                    "제품의 용도와 특성을 기준으로 적절한 분류를 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ③ 모델명·규격이 정리되지 않은 경우
            else if (specification.value === "no") {

                resultTitle = "제품의 기본정보를 정리해 주세요.";

                resultMessage =
                    "제품의 모델명과 규격 등 기본정보가 정리되어야 " +
                    "물품정보 등록에 필요한 내용을 구체적으로 작성할 수 있습니다.";

                resultClass = "result-check";
            }


            // ④ 사진·제품자료가 없는 경우
            else if (documents.value === "no") {

                resultTitle = "제품 사진과 관련 자료를 준비해 주세요.";

                resultMessage =
                    "물품정보 등록 과정에서는 제품 이미지와 관련 자료를 " +
                    "확인할 필요가 있으므로 현재 보유하고 있는 제품자료부터 " +
                    "정리하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 제품 특성·사양을 확인하기 어려운 경우
            else if (attributes.value === "no") {

                resultTitle = "제품의 주요 특성과 사양을 확인해 주세요.";

                resultMessage =
                    "제품에 따라 크기·재질·성능 등 확인해야 할 정보가 달라질 수 있습니다. " +
                    "제품자료를 기준으로 등록에 필요한 주요 특성을 정리하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 하나라도 잘 모르겠습니다
            else if (
                item.value === "unknown" ||
                classification.value === "unknown" ||
                specification.value === "unknown" ||
                documents.value === "unknown" ||
                attributes.value === "unknown"
            ) {

                resultTitle = "물품식별번호 등록을 위해 조금 더 확인이 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 등록하려는 제품의 " +
                    "물품분류, 모델·규격, 제품자료 및 주요 특성을 함께 검토하면 " +
                    "필요한 준비사항을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle = "물품식별번호 등록을 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 등록하려는 제품과 물품분류, 모델·규격 및 " +
                    "제품자료가 준비된 것으로 보입니다. 실제 신청 전에는 " +
                    "등록할 물품정보와 필요한 자료를 최종 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 모든 진단결과에서 상담 신청 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=product-identification-number"
            );

        });

        return;
    }

    // =====================================================
    // MAS(다수공급자계약) 자가진단
    // =====================================================

    if (document.querySelector('input[name="masProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="masProduct"]:checked');

            const notice =
                document.querySelector('input[name="masNotice"]:checked');

            const registration =
                document.querySelector('input[name="masRegistration"]:checked');

            const documents =
                document.querySelector('input[name="masDocuments"]:checked');

            const price =
                document.querySelector('input[name="masPrice"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !notice ||
                !registration ||
                !documents ||
                !price
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 제품이 정해지지 않은 경우
            if (product.value === "no") {

                resultTitle = "MAS로 계약하려는 제품부터 확인해 주세요.";

                resultMessage =
                    "MAS 계약을 검토하려면 먼저 계약하려는 제품이 구체적으로 " +
                    "정해져 있어야 합니다. 제품이 정해지면 해당 제품의 물품분류와 " +
                    "MAS 구매입찰공고 등을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // ② MAS 구매입찰공고가 없는 경우
            else if (notice.value === "no") {

                resultTitle = "해당 제품의 MAS 구매입찰공고를 확인해 보세요.";

                resultMessage =
                    "MAS 계약은 해당 제품과 관련된 구매입찰공고를 기준으로 " +
                    "참가요건과 제출자료를 검토하게 됩니다. 먼저 해당 제품에 " +
                    "적용되는 공고가 있는지 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ③ 조달등록이 준비되지 않은 경우
            else if (registration.value === "no") {

                resultTitle = "필요한 조달등록부터 확인해 주세요.";

                resultMessage =
                    "MAS 계약을 진행하려면 제품에 필요한 물품식별번호 등 " +
                    "선행 조달등록을 확인할 필요가 있습니다. 현재 등록상태를 " +
                    "먼저 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 인증·시험자료가 준비되지 않은 경우
            else if (documents.value === "no") {

                resultTitle = "제품별 인증·시험자료를 확인해 주세요.";

                resultMessage =
                    "제품과 구매입찰공고에 따라 인증서, 시험성적서, 규격서 등 " +
                    "확인해야 할 자료가 달라질 수 있습니다. 해당 제품에 필요한 " +
                    "자료부터 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑤ 거래·가격자료가 준비되지 않은 경우
            else if (price.value === "no") {

                resultTitle = "거래실적과 가격자료를 확인해 주세요.";

                resultMessage =
                    "MAS 계약과정에서는 제품의 거래내역과 가격을 확인할 수 있는 " +
                    "자료가 중요합니다. 현재 보유하고 있는 거래자료와 가격자료를 " +
                    "먼저 정리하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 하나라도 잘 모르겠습니다
            else if (
                product.value === "unknown" ||
                notice.value === "unknown" ||
                registration.value === "unknown" ||
                documents.value === "unknown" ||
                price.value === "unknown"
            ) {

                resultTitle = "MAS 계약 추진을 위해 조금 더 확인이 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 제품의 MAS 공고 여부, " +
                    "조달등록 상태, 인증·시험자료 및 거래·가격자료를 함께 검토하면 " +
                    "현재 어느 단계부터 준비해야 하는지 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle = "MAS 계약 검토를 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 제품, MAS 구매입찰공고, 조달등록 및 관련 자료가 " +
                    "준비된 것으로 보입니다. 실제 계약 추진 전에는 해당 공고의 " +
                    "참가요건과 적격성평가 및 가격자료를 최종 검토하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 모든 진단결과에서 상담 신청 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=mas-contract"
            );

        });

        return;
    }

    // =====================================================
    // 벤처확인 자가진단
    // =====================================================

    if (document.querySelector('input[name="ventureProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="ventureProduct"]:checked');

            const difference =
                document.querySelector('input[name="ventureDifference"]:checked');

            const development =
                document.querySelector('input[name="ventureDevelopment"]:checked');

            const team =
                document.querySelector('input[name="ventureTeam"]:checked');

            const market =
                document.querySelector('input[name="ventureMarket"]:checked');

            const growth =
                document.querySelector('input[name="ventureGrowth"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !difference ||
                !development ||
                !team ||
                !market ||
                !growth
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 기술·제품·서비스
            if (product.value === "no") {

                resultTitle =
                    "평가받을 기술·제품·서비스부터 구체화할 필요가 있습니다.";

                resultMessage =
                    "벤처확인을 검토하려면 기업이 어떤 기술·제품·서비스를 " +
                    "개발하거나 사업화하고 있는지 먼저 정리하는 것이 중요합니다. " +
                    "현재 사업내용을 바탕으로 평가대상을 구체화해 볼 수 있습니다.";

                resultClass = "result-check";
            }


            // ② 차별성
            else if (difference.value === "no") {

                resultTitle =
                    "기존 제품·서비스와의 차별성을 정리해 보세요.";

                resultMessage =
                    "기존 제품이나 서비스의 문제점과 한계를 살펴보고, " +
                    "우리 기업의 기술·제품·서비스가 이를 어떻게 개선하거나 " +
                    "해결하는지를 구체적으로 정리할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ③ 개발·사업화 과정
            else if (development.value === "no") {

                resultTitle =
                    "기술개발 및 사업화 과정을 정리할 필요가 있습니다.";

                resultMessage =
                    "아이디어부터 기술개발, 제품·서비스 구현 및 사업화까지 " +
                    "어떤 과정을 거쳤는지와 현재 어느 단계에 있는지를 " +
                    "구체적으로 정리하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ④ 인력·조직
            else if (team.value === "no") {

                resultTitle =
                    "사업을 실행할 인력과 역할을 확인해 보세요.";

                resultMessage =
                    "대표자와 핵심인력의 경력·역할 및 기술개발과 사업화를 " +
                    "실제로 수행할 수 있는 조직구성을 확인할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ⑤ 고객·시장
            else if (market.value === "no") {

                resultTitle =
                    "목표고객과 시장을 구체화할 필요가 있습니다.";

                resultMessage =
                    "누가 제품이나 서비스를 필요로 하는지, 목표시장의 규모와 " +
                    "특성은 어떠한지, 경쟁기업이나 경쟁제품은 무엇인지 등을 " +
                    "구체적으로 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ⑥ 성장계획
            else if (growth.value === "no") {

                resultTitle =
                    "향후 사업성장 계획을 구체화해 보세요.";

                resultMessage =
                    "시장진입 방법과 판매확대 계획, 향후 사업목표와 실행방안 등 " +
                    "기업이 앞으로 어떻게 성장할 것인지를 구체적으로 " +
                    "정리할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // 잘 모르겠습니다가 하나라도 있는 경우
            else if (
                product.value === "unknown" ||
                difference.value === "unknown" ||
                development.value === "unknown" ||
                team.value === "unknown" ||
                market.value === "unknown" ||
                growth.value === "unknown"
            ) {

                resultTitle =
                    "벤처확인을 위해 추가적인 검토가 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 기업의 기술·제품·서비스, " +
                    "개발과정, 인력, 시장 및 성장계획을 함께 검토하면 " +
                    "현재 준비상태와 보완해야 할 부분을 확인할 수 있습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle =
                    "벤처확인 검토를 위한 기본적인 준비가 되어 있습니다.";

                resultMessage =
                    "현재 답변상 기술·제품·서비스의 차별성, 개발과정, " +
                    "사업수행 인력, 목표시장 및 성장계획이 어느 정도 정리되어 있습니다. " +
                    "실제 신청 전에는 기업에 적합한 벤처확인 유형과 " +
                    "평가자료 및 증빙자료를 구체적으로 검토하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 어떤 결과에서도 상담 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=venture-confirmation"
            );

        });

        return;
    }

    // =====================================================
    // 여성기업 확인 자가진단
    // =====================================================

    if (document.querySelector('input[name="womenRepresentative"]')) {

        button.addEventListener("click", function () {

            const representative =
                document.querySelector('input[name="womenRepresentative"]:checked');

            const businessType =
                document.querySelector('input[name="womenBusinessType"]:checked');

            const ownership =
                document.querySelector('input[name="womenOwnership"]:checked');

            const management =
                document.querySelector('input[name="womenManagement"]:checked');

            const documents =
                document.querySelector('input[name="womenDocuments"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !representative ||
                !businessType ||
                !ownership ||
                !management ||
                !documents
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 여성 대표자 여부
            if (representative.value === "no") {

                resultTitle =
                    "여성 대표자 요건을 먼저 확인할 필요가 있습니다.";

                resultMessage =
                    "여성기업 확인은 여성 대표자가 기업을 소유하고 " +
                    "경영하는 것을 기본으로 합니다. 현재 대표자 구성과 " +
                    "기업의 실제 운영관계를 먼저 확인해 보시기 바랍니다.";

                resultClass = "result-check";
            }


            // ② 여성 대표자인지 불확실
            else if (representative.value === "unknown") {

                resultTitle =
                    "대표자 현황을 먼저 확인해 보세요.";

                resultMessage =
                    "사업자등록 및 법인등기 등 기업의 기본자료를 통해 " +
                    "현재 대표자 현황을 확인한 후 여성기업 해당 여부를 " +
                    "구체적으로 검토할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ③ 기업형태 불확실
            else if (businessType.value === "unknown") {

                resultTitle =
                    "기업형태를 먼저 확인할 필요가 있습니다.";

                resultMessage =
                    "개인사업자, 법인사업자, 협동조합 등에 따라 " +
                    "소유관계를 확인하는 방법과 준비해야 할 자료가 달라질 수 있습니다.";

                resultClass = "result-check";
            }


            // ④ 소유·지분관계
            else if (ownership.value === "no") {

                resultTitle =
                    "여성 대표자의 소유·지분관계를 검토할 필요가 있습니다.";

                resultMessage =
                    "여성기업 확인에서는 대표자 명의뿐 아니라 기업형태에 따른 " +
                    "실질적인 소유관계가 중요한 확인사항입니다. " +
                    "현재 지분 및 소유구조를 구체적으로 검토해 보시기 바랍니다.";

                resultClass = "result-check";
            }


            // ⑤ 실제 경영
            else if (management.value === "no") {

                resultTitle =
                    "여성 대표자의 실제 경영상황을 검토할 필요가 있습니다.";

                resultMessage =
                    "여성기업 확인은 여성 대표자가 실제로 기업을 경영하고 있는지도 " +
                    "중요하게 확인합니다. 의사결정과 업무수행 등 실제 운영상황을 " +
                    "구체적으로 살펴볼 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ⑥ 자료 준비
            else if (documents.value === "no") {

                resultTitle =
                    "기업형태에 맞는 확인자료를 준비할 필요가 있습니다.";

                resultMessage =
                    "개인사업자와 법인사업자, 협동조합 등에 따라 " +
                    "대표자와 소유·지분관계 및 기업 운영을 확인하는 자료가 달라집니다. " +
                    "현재 기업형태에 맞는 준비자료를 확인해 보시기 바랍니다.";

                resultClass = "result-check";
            }


            // 잘 모르겠습니다
            else if (
                ownership.value === "unknown" ||
                management.value === "unknown" ||
                documents.value === "unknown"
            ) {

                resultTitle =
                    "여성기업 확인을 위해 추가적인 검토가 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. " +
                    "기업형태와 대표자, 소유·지분관계 및 실제 경영상황을 " +
                    "확인하면 여성기업 신청 준비상태를 보다 구체적으로 검토할 수 있습니다.";

                resultClass = "result-check";
            }


            // 기본요건이 정리된 경우
            else {

                resultTitle =
                    "여성기업 확인 신청을 검토해 볼 수 있습니다.";

                resultMessage =
                    "현재 답변상 여성 대표자의 소유 및 경영관계가 " +
                    "기본적으로 정리되어 있습니다. 실제 신청 전에는 기업형태별 " +
                    "세부요건과 제출자료를 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 모든 결과에서 상담 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=women-business-confirmation"
            );

        });

        return;
    }

    // =====================================================
    // 직접생산확인증명서 자가진단
    // =====================================================

    if (document.querySelector('input[name="directProduct"]')) {

        button.addEventListener("click", function () {

            const product =
                document.querySelector('input[name="directProduct"]:checked');

            const item =
                document.querySelector('input[name="directItem"]:checked');

            const factory =
                document.querySelector('input[name="directFactory"]:checked');

            const production =
                document.querySelector('input[name="directProduction"]:checked');

            const criteria =
                document.querySelector('input[name="directCriteria"]:checked');

            const documents =
                document.querySelector('input[name="directDocuments"]:checked');


            // 모든 질문에 답했는지 확인
            if (
                !product ||
                !item ||
                !factory ||
                !production ||
                !criteria ||
                !documents
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle;
            let resultMessage;
            let resultClass;


            // ① 신청제품
            if (product.value === "no") {

                resultTitle =
                    "신청하려는 제품부터 구체적으로 정할 필요가 있습니다.";

                resultMessage =
                    "직접생산확인은 신청제품에 따라 적용되는 확인기준이 달라집니다. " +
                    "먼저 어떤 제품에 대해 직접생산확인을 받을 것인지 정한 후 " +
                    "해당 제품의 기준을 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // ② 세부품명
            else if (item.value === "no") {

                resultTitle =
                    "신청제품의 세부품명을 먼저 확인해 보세요.";

                resultMessage =
                    "직접생산확인기준은 신청하려는 제품의 세부품명에 따라 " +
                    "달라질 수 있습니다. 제품에 맞는 세부품명을 확인한 후 " +
                    "적용되는 직접생산확인기준을 검토할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ③ 생산공장
            else if (factory.value === "no") {

                resultTitle =
                    "제품을 생산하는 공장·사업장부터 검토할 필요가 있습니다.";

                resultMessage =
                    "신청제품을 실제로 어디에서 생산하는지와 해당 생산장소가 " +
                    "직접생산확인기준에 적합한지를 확인할 필요가 있습니다.";

                resultClass = "result-check";
            }


            // ④ 직접생산 여부
            else if (production.value === "no") {

                resultTitle =
                    "현재 생산방식에 대한 검토가 필요합니다.";

                resultMessage =
                    "직접생산확인은 신청기업이 해당 제품을 직접 생산하는지를 " +
                    "확인하는 제도입니다. 외부업체에 생산을 맡기거나 완제품을 " +
                    "구매하는 형태라면 현재 생산방식과 적용기준을 먼저 검토해야 합니다.";

                resultClass = "result-check";
            }


            // ⑤ 제품별 기준
            else if (criteria.value === "no") {

                resultTitle =
                    "신청제품의 직접생산확인기준을 먼저 확인해 보세요.";

                resultMessage =
                    "제품별로 생산공장, 생산시설·장비, 인력 및 생산공정 등 " +
                    "확인해야 할 기준이 다를 수 있습니다. 신청 전에 해당 제품에 " +
                    "적용되는 기준을 구체적으로 검토하는 것이 중요합니다.";

                resultClass = "result-check";
            }


            // ⑥ 증빙자료
            else if (documents.value === "no") {

                resultTitle =
                    "직접생산 사실을 확인할 자료를 준비할 필요가 있습니다.";

                resultMessage =
                    "제품별 직접생산확인기준에 따라 생산공장·시설·장비·인력 등 " +
                    "기준 충족 여부를 확인할 수 있는 자료를 준비해야 합니다. " +
                    "신청제품에 필요한 자료를 먼저 확인해 보시기 바랍니다.";

                resultClass = "result-check";
            }


            // 잘 모르겠습니다가 하나라도 있는 경우
            else if (
                product.value === "unknown" ||
                item.value === "unknown" ||
                factory.value === "unknown" ||
                production.value === "unknown" ||
                criteria.value === "unknown" ||
                documents.value === "unknown"
            ) {

                resultTitle =
                    "직접생산확인 신청을 위해 추가적인 검토가 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 신청제품과 세부품명, " +
                    "생산공장 및 실제 생산방식 등을 확인한 후 해당 제품의 " +
                    "직접생산확인기준 충족 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }


            // 모두 예
            else {

                resultTitle =
                    "직접생산확인 신청을 검토해 볼 수 있습니다.";

                resultMessage =
                    "현재 답변상 신청제품과 생산공장, 직접생산 여부 및 " +
                    "제품별 기준에 대한 기본적인 준비가 되어 있습니다. " +
                    "실제 신청 전에는 해당 세부품명의 직접생산확인기준과 " +
                    "제출자료를 구체적으로 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            // 모든 결과에서 상담 가능
            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=direct-production-confirmation"
            );

        });

        return;
    }

    // =====================================================
    // 기업부설연구소 자가진단
    // =====================================================

    if (document.querySelector('input[name="researchActivity"]')) {

        button.addEventListener("click", function () {

            const activity =
                document.querySelector('input[name="researchActivity"]:checked');

            const personnel =
                document.querySelector('input[name="researchPersonnel"]:checked');

            const dedicated =
                document.querySelector('input[name="researchDedicated"]:checked');

            const space =
                document.querySelector('input[name="researchSpace"]:checked');

            const equipment =
                document.querySelector('input[name="researchEquipment"]:checked');

            const documents =
                document.querySelector('input[name="researchDocuments"]:checked');

            if (
                !activity ||
                !personnel ||
                !dedicated ||
                !space ||
                !equipment ||
                !documents
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }

            let resultTitle;
            let resultMessage;
            let resultClass;


            if (activity.value === "no") {

                resultTitle =
                    "연구개발활동의 내용을 먼저 구체화할 필요가 있습니다.";

                resultMessage =
                    "기업부설연구소는 기업이 실제로 수행하는 연구개발활동을 " +
                    "기반으로 운영되어야 합니다. 현재 회사에서 어떤 기술이나 " +
                    "제품을 연구·개발할 것인지 먼저 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (personnel.value === "no") {

                resultTitle =
                    "연구개발을 담당할 인력을 먼저 검토할 필요가 있습니다.";

                resultMessage =
                    "기업부설연구소는 연구개발활동을 담당하는 연구인력이 " +
                    "필요합니다. 기업의 유형과 현재 인력현황을 확인하여 " +
                    "연구전담요원 인정요건을 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (dedicated.value === "no") {

                resultTitle =
                    "연구인력의 업무형태를 검토할 필요가 있습니다.";

                resultMessage =
                    "연구개발을 담당하는 인력이 있더라도 실제로 연구업무를 " +
                    "전담할 수 있는지 확인해야 합니다. 현재 담당자의 업무내용과 " +
                    "연구조직 운영방식을 함께 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (space.value === "no") {

                resultTitle =
                    "연구소로 사용할 연구공간을 검토할 필요가 있습니다.";

                resultMessage =
                    "기업부설연구소는 연구개발활동을 수행할 수 있는 연구공간을 " +
                    "갖추어야 합니다. 현재 사업장의 구조와 사용할 공간을 확인하여 " +
                    "연구공간 인정요건을 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (equipment.value === "no") {

                resultTitle =
                    "연구개발에 필요한 연구환경을 검토해 보세요.";

                resultMessage =
                    "수행하려는 연구개발활동에 필요한 시설·장비 등 연구환경이 " +
                    "적절하게 갖추어져 있는지 확인할 필요가 있습니다. " +
                    "연구분야와 실제 연구활동을 기준으로 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (documents.value === "no") {

                resultTitle =
                    "신고에 필요한 확인자료를 준비할 필요가 있습니다.";

                resultMessage =
                    "연구인력과 연구공간 등 기업의 연구환경을 확인할 수 있는 " +
                    "자료를 준비해야 합니다. 기업의 현재 상황에 따라 필요한 " +
                    "자료를 확인한 후 신고를 준비하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (
                activity.value === "unknown" ||
                personnel.value === "unknown" ||
                dedicated.value === "unknown" ||
                space.value === "unknown" ||
                equipment.value === "unknown" ||
                documents.value === "unknown"
            ) {

                resultTitle =
                    "기업부설연구소 신고를 위해 추가적인 검토가 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 연구개발활동, " +
                    "연구인력, 연구공간 및 연구환경 등을 확인하여 " +
                    "기업부설연구소 인정요건 충족 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else {

                resultTitle =
                    "기업부설연구소 신고를 검토해 볼 수 있습니다.";

                resultMessage =
                    "현재 답변상 연구개발활동, 연구인력, 연구공간 및 연구환경에 " +
                    "대한 기본적인 준비가 되어 있습니다. 실제 신고 전에는 " +
                    "기업 유형과 연구전담요원 자격 등 세부 인정요건을 " +
                    "구체적으로 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=corporate-research-institute"
            );

        });

        return;
    }

    // =====================================================
    // 연구개발전담부서 자가진단
    // =====================================================

    if (document.querySelector('input[name="departmentActivity"]')) {

        button.addEventListener("click", function () {

            const activity =
                document.querySelector('input[name="departmentActivity"]:checked');

            const personnel =
                document.querySelector('input[name="departmentPersonnel"]:checked');

            const dedicated =
                document.querySelector('input[name="departmentDedicated"]:checked');

            const space =
                document.querySelector('input[name="departmentSpace"]:checked');

            const equipment =
                document.querySelector('input[name="departmentEquipment"]:checked');

            const documents =
                document.querySelector('input[name="departmentDocuments"]:checked');

            if (
                !activity ||
                !personnel ||
                !dedicated ||
                !space ||
                !equipment ||
                !documents
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }

            let resultTitle;
            let resultMessage;
            let resultClass;


            if (activity.value === "no") {

                resultTitle =
                    "연구개발활동의 내용을 먼저 구체화할 필요가 있습니다.";

                resultMessage =
                    "연구개발전담부서는 기업이 실제로 수행하는 연구개발활동을 " +
                    "기반으로 운영되어야 합니다. 회사에서 어떤 기술이나 제품을 " +
                    "연구·개발할 것인지 먼저 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (personnel.value === "no") {

                resultTitle =
                    "연구개발을 담당할 인력을 먼저 검토할 필요가 있습니다.";

                resultMessage =
                    "연구개발전담부서는 연구개발활동을 담당하는 연구인력이 " +
                    "필요합니다. 현재 인력현황과 담당자의 자격 등을 확인하여 " +
                    "연구전담요원 인정요건을 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (dedicated.value === "no") {

                resultTitle =
                    "연구인력의 업무형태를 검토할 필요가 있습니다.";

                resultMessage =
                    "연구개발 담당자가 있더라도 실제로 연구개발업무를 " +
                    "전담할 수 있는지 확인해야 합니다. 현재 담당자의 업무내용과 " +
                    "연구조직 운영방식을 함께 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (space.value === "no") {

                resultTitle =
                    "연구개발전담부서로 사용할 공간을 검토할 필요가 있습니다.";

                resultMessage =
                    "연구개발활동을 수행할 수 있는 연구공간이 필요합니다. " +
                    "현재 사업장의 구조와 사용할 공간을 확인하여 " +
                    "연구공간 인정요건을 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (equipment.value === "no") {

                resultTitle =
                    "연구개발에 필요한 연구환경을 검토해 보세요.";

                resultMessage =
                    "수행하려는 연구개발활동에 필요한 시설·장비 등 연구환경이 " +
                    "적절하게 갖추어져 있는지 확인할 필요가 있습니다. " +
                    "실제 연구분야와 연구활동을 기준으로 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (documents.value === "no") {

                resultTitle =
                    "신고에 필요한 확인자료를 준비할 필요가 있습니다.";

                resultMessage =
                    "연구인력과 연구공간 등 현재 연구환경을 확인할 수 있는 " +
                    "자료를 준비해야 합니다. 기업의 현재 상황에 따라 필요한 " +
                    "자료를 확인한 후 신고를 준비하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (
                activity.value === "unknown" ||
                personnel.value === "unknown" ||
                dedicated.value === "unknown" ||
                space.value === "unknown" ||
                equipment.value === "unknown" ||
                documents.value === "unknown"
            ) {

                resultTitle =
                    "연구개발전담부서 신고를 위해 추가적인 검토가 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 연구개발활동, " +
                    "연구인력, 연구공간 및 연구환경 등을 확인하여 " +
                    "연구개발전담부서 인정요건 충족 여부를 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else {

                resultTitle =
                    "연구개발전담부서 신고를 검토해 볼 수 있습니다.";

                resultMessage =
                    "현재 답변상 연구개발활동, 연구인력, 연구공간 및 연구환경에 " +
                    "대한 기본적인 준비가 되어 있습니다. 실제 신고 전에는 " +
                    "연구전담요원의 자격과 연구공간 등 세부 인정요건을 " +
                    "구체적으로 확인하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=research-development-department"
            );

        });

        return;
    }

    // =====================================================
    // 벤처나라 자가진단
    // =====================================================

    if (document.querySelector('input[name="ventureNaraCompany"]')) {

        button.addEventListener("click", function () {

            const company =
                document.querySelector('input[name="ventureNaraCompany"]:checked');

            const product =
                document.querySelector('input[name="ventureNaraProduct"]:checked');

            const registration =
                document.querySelector('input[name="ventureNaraRegistration"]:checked');

            const technology =
                document.querySelector('input[name="ventureNaraTechnology"]:checked');

            const quality =
                document.querySelector('input[name="ventureNaraQuality"]:checked');

            const certification =
                document.querySelector('input[name="ventureNaraCertification"]:checked');

            if (
                !company ||
                !product ||
                !registration ||
                !technology ||
                !quality ||
                !certification
            ) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }

            let resultTitle;
            let resultMessage;
            let resultClass;


            if (company.value === "no") {

                resultTitle =
                    "먼저 신청기업의 자격을 확인할 필요가 있습니다.";

                resultMessage =
                    "벤처나라는 벤처기업 또는 일정한 요건을 갖춘 창업기업의 " +
                    "물품·서비스를 대상으로 합니다. 현재 기업이 신청대상에 " +
                    "해당하는지 먼저 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (product.value === "no") {

                resultTitle =
                    "벤처나라에 신청할 상품부터 구체적으로 정할 필요가 있습니다.";

                resultMessage =
                    "벤처나라는 기업 자체가 아니라 기업이 생산하는 물품·서비스를 " +
                    "대상으로 지정심사가 이루어집니다. 어떤 상품을 신청할 것인지 " +
                    "먼저 구체화하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (registration.value === "no") {

                resultTitle =
                    "신청에 필요한 조달등록 준비사항을 확인해 보세요.";

                resultMessage =
                    "벤처나라 지정 신청 전에 신청상품에 필요한 물품식별번호 등 " +
                    "조달등록 준비사항을 확인할 필요가 있습니다. 현재 상품의 " +
                    "등록상태를 먼저 점검하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (technology.value === "no") {

                resultTitle =
                    "신청상품의 기술과 차별성을 구체화할 필요가 있습니다.";

                resultMessage =
                    "지정심사에서는 신청상품에 적용된 기술과 기존 제품과의 " +
                    "차별성 등이 중요한 검토사항이 됩니다. 상품에 적용된 기술과 " +
                    "그로 인해 달라지는 특징·효과를 정리하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (quality.value === "no") {

                resultTitle =
                    "상품의 품질·성능을 확인할 자료를 검토할 필요가 있습니다.";

                resultMessage =
                    "신청상품의 품질과 성능을 객관적으로 설명할 수 있는 자료가 " +
                    "필요할 수 있습니다. 현재 보유한 인증서, 시험성적서 등 " +
                    "품질 관련 자료를 확인하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else if (certification.value === "no") {

                resultTitle =
                    "신청상품의 법정의무인증 여부를 먼저 확인해 보세요.";

                resultMessage =
                    "제품에 따라 제조·판매 전에 법령상 필요한 인증이나 등록 등이 " +
                    "있을 수 있습니다. 신청상품에 적용되는 의무사항이 있는지 " +
                    "먼저 확인하는 것이 중요합니다.";

                resultClass = "result-check";
            }

            else if (
                company.value === "unknown" ||
                product.value === "unknown" ||
                registration.value === "unknown" ||
                technology.value === "unknown" ||
                quality.value === "unknown" ||
                certification.value === "unknown"
            ) {

                resultTitle =
                    "벤처나라 신청을 위해 추가적인 검토가 필요합니다.";

                resultMessage =
                    "현재 확인하기 어려운 사항이 있습니다. 신청기업의 자격과 " +
                    "신청상품, 조달등록 상태, 기술·품질 및 관련 인증 등을 확인하여 " +
                    "벤처나라 지정 신청 가능성을 검토하는 것이 좋습니다.";

                resultClass = "result-check";
            }

            else {

                resultTitle =
                    "벤처나라 지정 신청을 검토해 볼 수 있습니다.";

                resultMessage =
                    "현재 답변상 신청기업과 상품, 조달등록, 기술·품질 및 인증에 " +
                    "대한 기본적인 준비가 되어 있습니다. 실제 신청 전에는 " +
                    "신청대상 여부와 상품설명서 및 기술·품질 증빙자료 등을 " +
                    "구체적으로 검토하는 것이 좋습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=venture-nara"
            );

        });

        return;
    }

    // ------------------------------------------------------------
    // 탄원서 자가진단
    // ------------------------------------------------------------
    if (document.querySelector('input[name="petitionTarget"]')) {

        const button = document.getElementById("diagnosisButton");

        button.addEventListener("click", function () {

            const target =
                document.querySelector('input[name="petitionTarget"]:checked');

            const petitionCase =
                document.querySelector('input[name="petitionCase"]:checked');

            const request =
                document.querySelector('input[name="petitionRequest"]:checked');

            const relation =
                document.querySelector('input[name="petitionRelation"]:checked');

            const facts =
                document.querySelector('input[name="petitionFacts"]:checked');

            const documents =
                document.querySelector('input[name="petitionDocuments"]:checked');


            // 답하지 않은 문항 확인
            if (!target || !petitionCase || !request ||
                !relation || !facts || !documents) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle = "";
            let resultMessage = "";
            let resultClass = "result-check";


            // 1. 제출대상
            if (target.value === "no") {

                resultTitle =
                    "탄원서를 제출할 대상을 먼저 확인해 보세요.";

                resultMessage =
                    "어느 기관이나 담당자에게 탄원서를 제출할 것인지에 따라 문서의 내용과 작성 방향이 달라질 수 있습니다.";


            // 2. 사건·사안
            } else if (petitionCase.value === "no") {

                resultTitle =
                    "탄원의 대상이 되는 사건이나 사안을 먼저 정리해 보세요.";

                resultMessage =
                    "탄원서 작성 전 어떤 사건이나 사안에 관한 탄원인지 구체적으로 정리할 필요가 있습니다.";


            // 3. 요청사항
            } else if (request.value === "no") {

                resultTitle =
                    "탄원을 통해 요청하려는 내용을 구체화할 필요가 있습니다.";

                resultMessage =
                    "탄원서를 통해 무엇을 요청하려는지가 분명해야 전체 문서의 방향을 정하기 쉽습니다.";


            // 4. 관계
            } else if (relation.value === "no") {

                resultTitle =
                    "탄원인과 사건 당사자의 관계를 정리해 보세요.";

                resultMessage =
                    "탄원인이 어떤 관계에서 사건을 알고 있으며 왜 탄원하게 되었는지를 설명하는 것이 문서 구성에 도움이 됩니다.";


            // 5. 구체적인 사실
            } else if (facts.value === "no") {

                resultTitle =
                    "탄원의 이유와 구체적인 사실관계를 정리할 필요가 있습니다.";

                resultMessage =
                    "사건의 경위와 탄원 이유를 구체적인 사실을 중심으로 정리하면 탄원 취지를 보다 명확하게 전달할 수 있습니다.";


            // 6. 관련자료
            } else if (documents.value === "no") {

                resultTitle =
                    "관련 자료가 없더라도 탄원서 작성은 검토할 수 있습니다.";

                resultMessage =
                    "별도의 자료가 없다면 현재 확인할 수 있는 사실관계와 탄원인이 알고 있는 내용을 중심으로 작성 방향을 검토할 수 있습니다.";


            // 잘 모르겠습니다가 하나라도 있는 경우
            } else if (
                target.value === "unknown" ||
                petitionCase.value === "unknown" ||
                request.value === "unknown" ||
                relation.value === "unknown" ||
                facts.value === "unknown" ||
                documents.value === "unknown"
            ) {

                resultTitle =
                    "탄원서 작성 전 몇 가지 사항을 추가로 확인해 보세요.";

                resultMessage =
                    "잘 모르거나 아직 정리되지 않은 부분이 있어도 상담을 통해 사실관계와 탄원 목적을 하나씩 정리할 수 있습니다.";


            // 모두 예
            } else {

                resultTitle =
                    "탄원서 작성을 위한 기본내용이 어느 정도 정리되어 있습니다.";

                resultMessage =
                    "현재 준비된 내용을 바탕으로 사건의 경위와 탄원 취지, 요청사항을 체계적으로 구성하는 단계로 진행할 수 있습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=petition"
            );

        });

        return;
    }

    // ------------------------------------------------------------
    // 반성문 자가진단
    // ------------------------------------------------------------
    if (document.querySelector('input[name="reflectionCase"]')) {

        const button = document.getElementById("diagnosisButton");

        button.addEventListener("click", function () {

            const reflectionCase =
                document.querySelector('input[name="reflectionCase"]:checked');

            const facts =
                document.querySelector('input[name="reflectionFacts"]:checked');

            const wrong =
                document.querySelector('input[name="reflectionWrong"]:checked');

            const impact =
                document.querySelector('input[name="reflectionImpact"]:checked');

            const action =
                document.querySelector('input[name="reflectionAction"]:checked');

            const prevention =
                document.querySelector('input[name="reflectionPrevention"]:checked');


            // 답하지 않은 문항 확인
            if (!reflectionCase || !facts || !wrong ||
                !impact || !action || !prevention) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle = "";
            let resultMessage = "";
            let resultClass = "result-check";


            // 1. 사건·사안
            if (reflectionCase.value === "no") {

                resultTitle =
                    "반성문을 작성하려는 사건이나 사안을 먼저 확인해 보세요.";

                resultMessage =
                    "어떤 사건이나 사안에 관한 반성문인지 확인하면 작성해야 할 내용과 방향을 보다 구체적으로 정할 수 있습니다.";


            // 2. 사건 경위
            } else if (facts.value === "no") {

                resultTitle =
                    "자신의 행동과 사건의 경위를 먼저 정리해 보세요.";

                resultMessage =
                    "무슨 일이 있었는지 시간의 흐름과 구체적인 사실을 중심으로 정리하는 것이 반성문 작성의 출발점입니다.";


            // 3. 잘못에 대한 인식
            } else if (wrong.value === "no") {

                resultTitle =
                    "자신의 행동에서 무엇이 잘못되었는지 구체적으로 돌아볼 필요가 있습니다.";

                resultMessage =
                    "단순히 잘못했다는 표현보다 자신의 어떤 행동이 왜 잘못되었는지를 구체적으로 정리하는 것이 중요합니다.";


            // 4. 결과·영향
            } else if (impact.value === "no") {

                resultTitle =
                    "자신의 행동으로 발생한 결과를 확인해 보세요.";

                resultMessage =
                    "자신의 행동이 어떠한 결과를 가져왔는지 또는 다른 사람에게 어떤 영향을 주었는지를 살펴보는 것이 필요합니다.";


            // 5. 이후 행동
            } else if (action.value === "no") {

                resultTitle =
                    "사건 이후 실제로 할 수 있는 행동을 검토해 보세요.";

                resultMessage =
                    "아직 문제해결이나 피해회복을 위한 행동을 하지 않았더라도 현재 상황에서 할 수 있는 구체적인 조치가 무엇인지 검토할 수 있습니다.";


            // 6. 재발방지
            } else if (prevention.value === "no") {

                resultTitle =
                    "앞으로 같은 일이 반복되지 않도록 구체적인 계획을 세워보세요.";

                resultMessage =
                    "막연히 다시는 그러지 않겠다는 표현보다 생활이나 행동을 어떻게 바꿀 것인지 구체적으로 정리하는 것이 좋습니다.";


            // 잘 모르겠습니다
            } else if (
                reflectionCase.value === "unknown" ||
                facts.value === "unknown" ||
                wrong.value === "unknown" ||
                impact.value === "unknown" ||
                action.value === "unknown" ||
                prevention.value === "unknown"
            ) {

                resultTitle =
                    "반성문 작성 전 몇 가지 내용을 추가로 정리해 보세요.";

                resultMessage =
                    "아직 명확하지 않은 부분이 있어도 상담을 통해 사건의 경위와 잘못에 대한 인식, 이후의 노력과 재발방지 계획을 하나씩 정리할 수 있습니다.";


            // 모두 예
            } else {

                resultTitle =
                    "반성문 작성을 위한 기본내용이 어느 정도 정리되어 있습니다.";

                resultMessage =
                    "현재 정리된 사실을 바탕으로 사건의 경위, 잘못에 대한 인식, 사건 이후의 노력과 재발방지 계획을 체계적으로 구성하는 단계로 진행할 수 있습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=reflection-letter"
            );

        });

        return;
    }

    // ------------------------------------------------------------
    // 부양기피사유서 자가진단
    // ------------------------------------------------------------
    if (document.querySelector('input[name="supportProcedure"]')) {

        const button = document.getElementById("diagnosisButton");

        button.addEventListener("click", function () {

            const procedure =
                document.querySelector('input[name="supportProcedure"]:checked');

            const relation =
                document.querySelector('input[name="supportRelation"]:checked');

            const contact =
                document.querySelector('input[name="supportContact"]:checked');

            const financial =
                document.querySelector('input[name="supportFinancial"]:checked');

            const reason =
                document.querySelector('input[name="supportReason"]:checked');

            const documents =
                document.querySelector('input[name="supportDocuments"]:checked');


            // 답하지 않은 문항 확인
            if (!procedure || !relation || !contact ||
                !financial || !reason || !documents) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle = "";
            let resultMessage = "";
            let resultClass = "result-check";


            // 1. 행정절차·제출기관
            if (procedure.value === "no") {

                resultTitle =
                    "먼저 어떤 절차에서 소명을 요구받았는지 확인해 보세요.";

                resultMessage =
                    "사유서가 필요한 행정절차와 제출기관을 확인하면 어떤 사실을 중심으로 설명해야 하는지 보다 구체적으로 검토할 수 있습니다.";


            // 2. 가족관계
            } else if (relation.value === "no") {

                resultTitle =
                    "부양 문제가 발생한 가족관계부터 확인할 필요가 있습니다.";

                resultMessage =
                    "누구와의 부양관계가 문제되는지를 확인한 뒤 실제 부양관계와 그동안의 경위를 살펴볼 필요가 있습니다.";


            // 3. 연락·교류상태
            } else if (contact.value === "no") {

                resultTitle =
                    "현재의 연락·교류상태를 구체적으로 정리해 보세요.";

                resultMessage =
                    "연락이나 왕래가 있는지, 있다면 어느 정도인지 등 실제 가족관계가 어떻게 유지되어 왔는지를 정리할 필요가 있습니다.";


            // 4. 경제적 지원
            } else if (financial.value === "no") {

                resultTitle =
                    "경제적인 지원관계를 확인해 볼 필요가 있습니다.";

                resultMessage =
                    "생활비 지급이나 금전 지원 등이 있었는지 여부와 그 경위를 확인하면 실제 부양관계를 보다 구체적으로 설명할 수 있습니다.";


            // 5. 단절·부양곤란 경위
            } else if (reason.value === "no") {

                resultTitle =
                    "부양이 어렵게 된 구체적인 경위를 정리할 필요가 있습니다.";

                resultMessage =
                    "단순히 연락이 없다는 내용보다 언제부터 어떤 사정으로 현재의 관계가 형성되었는지를 구체적인 사실을 중심으로 정리하는 것이 중요합니다.";


            // 6. 관련자료
            } else if (documents.value === "no") {

                resultTitle =
                    "관련 자료가 부족하더라도 소명 방향을 검토할 수 있습니다.";

                resultMessage =
                    "현재 자료가 없더라도 사실관계를 먼저 정리한 뒤 확인 가능한 자료나 추가로 확보할 수 있는 자료가 있는지 검토할 수 있습니다.";


            // 잘 모르겠습니다가 하나라도 있는 경우
            } else if (
                procedure.value === "unknown" ||
                relation.value === "unknown" ||
                contact.value === "unknown" ||
                financial.value === "unknown" ||
                reason.value === "unknown" ||
                documents.value === "unknown"
            ) {

                resultTitle =
                    "부양관계와 소명내용을 조금 더 확인해 볼 필요가 있습니다.";

                resultMessage =
                    "아직 명확하지 않은 부분이 있어도 상담을 통해 행정기관의 요구사항과 가족관계, 실제 부양상황 및 관련 자료를 하나씩 확인할 수 있습니다.";


            // 모두 예
            } else {

                resultTitle =
                    "부양기피사유서 작성을 위한 기본내용이 어느 정도 정리되어 있습니다.";

                resultMessage =
                    "현재 확인된 내용을 바탕으로 가족관계와 실제 부양상황, 관계가 단절되거나 부양이 어려워진 경위 및 관련 자료를 체계적으로 검토할 수 있습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=support-refusal-statement"
            );

        });

        return;
    }

    // ------------------------------------------------------------
    // 상가건물 권리금계약서 자가진단
    // ------------------------------------------------------------
    if (document.querySelector('input[name="premiumParties"]')) {

        const button = document.getElementById("diagnosisButton");

        button.addEventListener("click", function () {

            const parties =
                document.querySelector('input[name="premiumParties"]:checked');

            const payment =
                document.querySelector('input[name="premiumPayment"]:checked');

            const lease =
                document.querySelector('input[name="premiumLease"]:checked');

            const assets =
                document.querySelector('input[name="premiumAssets"]:checked');

            const business =
                document.querySelector('input[name="premiumBusiness"]:checked');

            const special =
                document.querySelector('input[name="premiumSpecial"]:checked');


            // 답하지 않은 문항 확인
            if (!parties || !payment || !lease ||
                !assets || !business || !special) {

                alert("모든 질문에 답변해 주세요.");
                return;
            }


            let resultTitle = "";
            let resultMessage = "";
            let resultClass = "result-check";


            // 1. 당사자·대상상가
            if (parties.value === "no") {

                resultTitle =
                    "권리금계약의 당사자와 대상 상가부터 확인해 보세요.";

                resultMessage =
                    "누가 권리금을 지급하고 받는지, 어느 상가의 영업에 관한 계약인지 먼저 명확하게 정리할 필요가 있습니다.";


            // 2. 권리금 지급조건
            } else if (payment.value === "no") {

                resultTitle =
                    "권리금과 지급조건을 구체적으로 정할 필요가 있습니다.";

                resultMessage =
                    "총 권리금뿐 아니라 계약금·중도금·잔금의 금액과 지급시기를 구체적으로 정리하는 것이 좋습니다.";


            // 3. 신규 임대차계약
            } else if (lease.value === "no") {

                resultTitle =
                    "신규 임대차계약의 조건을 먼저 확인해 보세요.";

                resultMessage =
                    "권리금계약과 신규 임대차계약은 서로 관련될 수 있으므로 임대인과 신규임차인 사이의 임대차계약 조건을 함께 검토할 필요가 있습니다.";


            // 4. 시설·비품 등 이전대상
            } else if (assets.value === "no") {

                resultTitle =
                    "권리금에 포함되는 이전대상을 구체적으로 정리해 보세요.";

                resultMessage =
                    "시설·비품 등 무엇을 넘겨주고 넘겨받는지를 목록으로 정리하면 계약 이후 발생할 수 있는 분쟁을 줄이는 데 도움이 됩니다.";


            // 5. 기존 영업 관련 사항
            } else if (business.value === "no") {

                resultTitle =
                    "기존 영업과 관련하여 확인할 사항이 있는지 살펴보세요.";

                resultMessage =
                    "영업상 채무·고객정보·근로자 등은 사업장에 따라 해당 여부가 다를 수 있으므로, 먼저 이전하거나 정리해야 할 사항이 있는지 확인할 필요가 있습니다.";


            // 6. 해제·손해배상 등
            } else if (special.value === "no") {

                resultTitle =
                    "계약이 정상적으로 이행되지 않을 경우도 대비할 필요가 있습니다.";

                resultMessage =
                    "임대차계약이 체결되지 않거나 당사자가 약속을 이행하지 않는 경우 등에 대비하여 계약해제·손해배상 등 필요한 사항을 검토하는 것이 좋습니다.";


            // 잘 모르겠습니다가 하나라도 있는 경우
            } else if (
                parties.value === "unknown" ||
                payment.value === "unknown" ||
                lease.value === "unknown" ||
                assets.value === "unknown" ||
                business.value === "unknown" ||
                special.value === "unknown"
            ) {

                resultTitle =
                    "권리금계약 전에 몇 가지 사항을 추가로 확인해 보세요.";

                resultMessage =
                    "아직 명확하지 않은 부분이 있어도 상담을 통해 권리금 지급조건, 임대차관계, 이전대상 및 필요한 계약조건을 하나씩 확인할 수 있습니다.";


            // 모두 예
            } else {

                resultTitle =
                    "권리금계약서 작성을 위한 기본내용이 어느 정도 정리되어 있습니다.";

                resultMessage =
                    "현재 확인된 내용을 바탕으로 권리금 지급조건과 임대차관계, 이전대상 및 필요한 특약사항을 검토하여 계약서를 구성할 수 있습니다.";

                resultClass = "result-success";
            }


            showResult(
                resultTitle,
                resultMessage,
                resultClass,
                "consult.html?type=commercial-premium-contract"
            );

        });

        return;
    }

// 생활폐기물 수집·운반업 자가진단
if (document.querySelector('input[name="wasteType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wasteType =
            document.querySelector('input[name="wasteType"]:checked')?.value;

        const wasteArea =
            document.querySelector('input[name="wasteArea"]:checked')?.value;

        const wasteMethod =
            document.querySelector('input[name="wasteMethod"]:checked')?.value;

        const wasteVehicle =
            document.querySelector('input[name="wasteVehicle"]:checked')?.value;

        const wasteOffice =
            document.querySelector('input[name="wasteOffice"]:checked')?.value;

        const wastePlan =
            document.querySelector('input[name="wastePlan"]:checked')?.value;


        // 미응답 확인
        if (
            !wasteType ||
            !wasteArea ||
            !wasteMethod ||
            !wasteVehicle ||
            !wasteOffice ||
            !wastePlan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            wasteType === "unknown" ||
            wasteArea === "unknown" ||
            wasteMethod === "unknown" ||
            wasteVehicle === "unknown" ||
            wasteOffice === "unknown" ||
            wastePlan === "unknown"
        ) {

            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "생활폐기물 수집·운반업은 취급하려는 폐기물의 종류와 영업지역, 운반방법 등에 따라 검토해야 할 사항이 달라질 수 있습니다. 현재 명확하지 않은 부분부터 확인한 후 사업계획과 허가요건을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-household-collection"
            );

            return;
        }


        // 대상 폐기물이 정해지지 않은 경우
        if (wasteType === "no") {

            showResult(
                "수집·운반 대상 폐기물부터 확인하는 것이 좋습니다.",
                "취급하려는 폐기물의 종류에 따라 적용되는 시설·장비와 영업방법 등의 검토사항이 달라질 수 있습니다. 먼저 어떤 폐기물을 수집·운반할 것인지 구체적으로 정리할 필요가 있습니다.",
                "result-check",
                "consult.html?type=waste-household-collection"
            );

            return;
        }


        // 영업지역이 정해지지 않은 경우
        if (wasteArea === "no") {

            showResult(
                "영업하려는 지역을 먼저 구체화하는 것이 좋습니다.",
                "생활폐기물 수집·운반업은 영업지역과 관련하여 확인해야 할 사항이 있으므로 사업을 진행하려는 지역을 먼저 정리한 후 관련 기준을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-household-collection"
            );

            return;
        }


        // 운반방법이 정해지지 않은 경우
        if (wasteMethod === "no") {

            showResult(
                "수집·운반 방법에 대한 계획이 필요합니다.",
                "어떤 폐기물을 어떤 방식으로 수집하고 운반할 것인지에 따라 필요한 차량과 장비 등의 검토가 달라질 수 있습니다. 실제 영업방식을 먼저 구체화하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-household-collection"
            );

            return;
        }


        // 차량·장비 미준비
        if (wasteVehicle === "no") {

            showResult(
                "필요한 차량과 장비 기준을 확인해 보세요.",
                "생활폐기물 수집·운반업에는 시설·장비에 관한 기준이 있습니다. 대상 폐기물과 운반방법을 기준으로 필요한 차량과 장비를 확인한 후 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-household-collection"
            );

            return;
        }


        // 사무실 미확보
        if (wasteOffice === "no") {

            showResult(
                "연락장소 또는 사무실에 대한 검토가 필요합니다.",
                "생활폐기물 수집·운반업을 준비할 때에는 영업에 사용할 연락장소 또는 사무실에 관한 사항도 함께 확인해야 합니다.",
                "result-check",
                "consult.html?type=waste-household-collection"
            );

            return;
        }


        // 사업계획 미정리
        if (wastePlan === "no") {

            showResult(
                "사업계획을 구체적으로 정리하는 단계입니다.",
                "대상 폐기물과 수집·운반 방법, 차량·장비 등의 내용을 바탕으로 사업계획을 정리하고 필요한 신청자료를 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-household-collection"
            );

            return;
        }


        // 모두 예
        showResult(
            "기본적인 사업 준비사항이 어느 정도 정리되어 있습니다.",
            "대상 폐기물, 영업지역, 수집·운반 방법, 차량·장비 및 연락장소 또는 사무실 등이 정리되어 있다면 다음 단계로 실제 적용되는 세부 허가요건과 사업계획서 및 제출자료를 확인해 보는 것이 좋습니다.",
            "result-success",
            "consult.html?type=waste-household-collection"
        );

    });

    return;
}

// 사업장폐기물 수집·운반업 자가진단
if (document.querySelector('input[name="businessWasteType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wasteType =
            document.querySelector('input[name="businessWasteType"]:checked')?.value;

        const wasteSource =
            document.querySelector('input[name="businessWasteSource"]:checked')?.value;

        const wasteArea =
            document.querySelector('input[name="businessWasteArea"]:checked')?.value;

        const wasteMethod =
            document.querySelector('input[name="businessWasteMethod"]:checked')?.value;

        const wasteVehicle =
            document.querySelector('input[name="businessWasteVehicle"]:checked')?.value;

        const wastePlan =
            document.querySelector('input[name="businessWastePlan"]:checked')?.value;


        // 미응답 확인
        if (
            !wasteType ||
            !wasteSource ||
            !wasteArea ||
            !wasteMethod ||
            !wasteVehicle ||
            !wastePlan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            wasteType === "unknown" ||
            wasteSource === "unknown" ||
            wasteArea === "unknown" ||
            wasteMethod === "unknown" ||
            wasteVehicle === "unknown" ||
            wastePlan === "unknown"
        ) {

            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "사업장폐기물은 폐기물의 종류와 발생과정 등에 따라 적용되는 수집·운반 기준이 달라질 수 있습니다. 명확하지 않은 부분을 먼저 확인한 후 시설·장비와 사업계획을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-business-collection"
            );

            return;
        }


        // 폐기물 종류 미정
        if (wasteType === "no") {

            showResult(
                "수집·운반할 폐기물의 종류부터 확인하는 것이 좋습니다.",
                "사업장폐기물은 종류에 따라 적용되는 허가기준이 달라질 수 있으므로 어떤 폐기물을 취급할 것인지 먼저 구체적으로 정리할 필요가 있습니다.",
                "result-check",
                "consult.html?type=waste-business-collection"
            );

            return;
        }



        // 영업지역 미정
        if (wasteArea === "no") {

            showResult(
                "영업하려는 지역을 구체화하는 것이 좋습니다.",
                "수집·운반하려는 지역을 정리한 후 관할 행정기관과 실제 영업범위 등을 함께 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-business-collection"
            );

            return;
        }


        // 수집·운반 방법 미정
        if (wasteMethod === "no") {

            showResult(
                "수집·운반 방법에 대한 계획이 필요합니다.",
                "취급할 폐기물을 어떤 방법으로 수집하고 운반할 것인지에 따라 필요한 차량과 장비 등의 검토가 달라질 수 있습니다.",
                "result-check",
                "consult.html?type=waste-business-collection"
            );

            return;
        }


        // 차량·장비 미준비
        if (wasteVehicle === "no") {

            showResult(
                "필요한 차량과 장비 기준을 확인해 보세요.",
                "취급하려는 사업장폐기물의 종류와 운반방법을 기준으로 적용되는 시설·장비 요건을 먼저 확인한 후 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-business-collection"
            );

            return;
        }


        // 사무실·사업계획 미준비
        if (wastePlan === "no") {

            showResult(
                "사업계획과 영업 준비사항을 정리하는 단계입니다.",
                "연락장소 또는 사무실과 함께 대상 폐기물, 수집·운반 방법, 차량·장비 등의 내용을 정리하여 사업계획과 허가신청 준비사항을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-business-collection"
            );

            return;
        }


        // 모두 예
        showResult(
            "기본적인 사업 준비사항이 어느 정도 정리되어 있습니다.",
            "대상 폐기물과 발생과정, 영업지역, 운반방법 및 차량·장비 등이 정리되어 있다면 다음 단계로 폐기물의 정확한 구분과 적용되는 세부 허가기준, 사업계획서 및 제출자료를 확인해 보는 것이 좋습니다.",
            "result-success",
            "consult.html?type=waste-business-collection"
        );

    });

    return;
}

// 지정폐기물 수집·운반업 자가진단
if (document.querySelector('input[name="designatedWasteType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wasteType =
            document.querySelector('input[name="designatedWasteType"]:checked')?.value;

        const wasteState =
            document.querySelector('input[name="designatedWasteState"]:checked')?.value;

        const wasteMethod =
            document.querySelector('input[name="designatedWasteMethod"]:checked')?.value;

        const wasteVehicle =
            document.querySelector('input[name="designatedWasteVehicle"]:checked')?.value;

        const wasteFacility =
            document.querySelector('input[name="designatedWasteFacility"]:checked')?.value;

        const wastePersonnel =
            document.querySelector('input[name="designatedWastePersonnel"]:checked')?.value;


        // 미응답 확인
        if (
            !wasteType ||
            !wasteState ||
            !wasteMethod ||
            !wasteVehicle ||
            !wasteFacility ||
            !wastePersonnel
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            wasteType === "unknown" ||
            wasteState === "unknown" ||
            wasteMethod === "unknown" ||
            wasteVehicle === "unknown" ||
            wasteFacility === "unknown" ||
            wastePersonnel === "unknown"
        ) {

            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "지정폐기물 수집·운반업은 취급 폐기물의 종류와 상태, 운반방법 등에 따라 필요한 차량과 시설 등의 검토가 달라질 수 있습니다. 명확하지 않은 부분부터 확인한 후 적용되는 허가요건을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-designated-collection"
            );

            return;
        }


        // 지정폐기물 해당 여부 미확인
        if (wasteType === "no") {

            showResult(
                "취급하려는 폐기물의 종류부터 확인하는 것이 좋습니다.",
                "먼저 수집·운반하려는 폐기물이 지정폐기물에 해당하는지 확인해야 합니다. 폐기물의 종류와 발생과정 등을 확인한 후 적용되는 수집·운반업 기준을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-designated-collection"
            );

            return;
        }


        // 폐기물 상태 미확인
        if (wasteState === "no") {

            showResult(
                "폐기물의 상태를 확인할 필요가 있습니다.",
                "취급하려는 지정폐기물이 액체인지 고체인지 등 폐기물의 상태에 따라 필요한 운반차량 등의 검토가 달라질 수 있습니다. 폐기물의 성상과 상태를 먼저 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-designated-collection"
            );

            return;
        }


        // 운반방법 미정
        if (wasteMethod === "no") {

            showResult(
                "수집·운반 방법에 대한 계획이 필요합니다.",
                "취급하려는 지정폐기물의 종류와 상태에 맞추어 어떤 방법으로 수집하고 운반할 것인지 구체화한 후 필요한 시설·장비를 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-designated-collection"
            );

            return;
        }


        // 차량 미준비
        if (wasteVehicle === "no") {

            showResult(
                "운반차량 기준을 먼저 확인해 보세요.",
                "지정폐기물 수집·운반업에는 운반차량에 관한 기준이 있으므로 취급하려는 폐기물의 종류와 상태, 운반방법을 기준으로 필요한 차량을 확인한 후 확보계획을 세우는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-designated-collection"
            );

            return;
        }


        // 주차공간·세차시설 미준비
        if (wasteFacility === "no") {

            showResult(
                "주차공간과 세차시설에 대한 검토가 필요합니다.",
                "지정폐기물 수집·운반업은 차량뿐 아니라 관련 시설도 함께 검토해야 합니다. 사업장 계획을 확정하기 전에 적용되는 시설기준을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-designated-collection"
            );

            return;
        }


        // 기술인력·사무실 미준비
        if (wastePersonnel === "no") {

            showResult(
                "기술인력과 영업 준비사항을 확인해 보세요.",
                "지정폐기물 수집·운반업은 필요한 기술인력과 연락장소 또는 사무실 등도 함께 검토해야 합니다. 현재 확보상태와 향후 확보계획을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-designated-collection"
            );

            return;
        }


        // 모두 예
        showResult(
            "기본적인 사업 준비사항이 어느 정도 정리되어 있습니다.",
            "취급할 지정폐기물의 종류와 상태, 운반방법, 차량·시설 및 기술인력 등이 정리되어 있다면 다음 단계로 실제 적용되는 세부 허가기준과 사업계획서 및 제출자료를 확인해 보는 것이 좋습니다.",
            "result-success",
            "consult.html?type=waste-designated-collection"
        );

    });

    return;
}

// 의료폐기물 수집·운반업 자가진단
if (document.querySelector('input[name="medicalWasteType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wasteType =
            document.querySelector('input[name="medicalWasteType"]:checked')?.value;

        const wasteDetail =
            document.querySelector('input[name="medicalWasteDetail"]:checked')?.value;

        const wasteMethod =
            document.querySelector('input[name="medicalWasteMethod"]:checked')?.value;

        const wasteVehicle =
            document.querySelector('input[name="medicalWasteVehicle"]:checked')?.value;

        const wasteFacility =
            document.querySelector('input[name="medicalWasteFacility"]:checked')?.value;

        const wastePersonnel =
            document.querySelector('input[name="medicalWastePersonnel"]:checked')?.value;


        // 미응답 확인
        if (
            !wasteType ||
            !wasteDetail ||
            !wasteMethod ||
            !wasteVehicle ||
            !wasteFacility ||
            !wastePersonnel
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            wasteType === "unknown" ||
            wasteDetail === "unknown" ||
            wasteMethod === "unknown" ||
            wasteVehicle === "unknown" ||
            wasteFacility === "unknown" ||
            wastePersonnel === "unknown"
        ) {

            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "의료폐기물 수집·운반업은 취급하려는 의료폐기물의 종류와 운반방법 등에 따라 필요한 차량·시설 등의 기준을 확인해야 합니다. 명확하지 않은 부분부터 확인한 후 적용되는 허가요건을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-medical-collection"
            );

            return;
        }


        // 의료폐기물 해당 여부
        if (wasteType === "no") {

            showResult(
                "취급하려는 폐기물의 종류부터 확인하는 것이 좋습니다.",
                "먼저 수집·운반하려는 폐기물이 의료폐기물에 해당하는지 확인해야 합니다. 발생 장소와 폐기물의 종류 등을 확인한 후 적용되는 수집·운반 기준을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-medical-collection"
            );

            return;
        }


        // 세부 의료폐기물 종류 미정
        if (wasteDetail === "no") {

            showResult(
                "취급하려는 의료폐기물의 범위를 정리할 필요가 있습니다.",
                "의료폐기물의 종류와 발생 형태 등을 확인하여 실제 수집·운반하려는 폐기물의 범위를 먼저 구체화하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-medical-collection"
            );

            return;
        }


        // 운반방법 미정
        if (wasteMethod === "no") {

            showResult(
                "수집·운반 방법에 대한 계획이 필요합니다.",
                "취급하려는 의료폐기물을 어떤 방식으로 수집하고 운반할 것인지 정리한 후 이에 맞는 차량·시설 및 장비 기준을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-medical-collection"
            );

            return;
        }


        // 전용차량 미준비
        if (wasteVehicle === "no") {

            showResult(
                "의료폐기물 운반차량 기준을 확인해 보세요.",
                "의료폐기물 수집·운반업에는 운반차량에 관한 별도의 기준이 있으므로 차량을 확보하기 전에 적용되는 세부 기준을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-medical-collection"
            );

            return;
        }


        // 시설·장비 기준 미확인
        if (wasteFacility === "no") {

            showResult(
                "관련 시설·장비 기준에 대한 검토가 필요합니다.",
                "의료폐기물의 특성을 고려하여 운반차량과 관련 시설·장비에 적용되는 기준을 확인한 후 사업 준비계획에 반영하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-medical-collection"
            );

            return;
        }


        // 기술인력·사무실 미확인
        if (wastePersonnel === "no") {

            showResult(
                "기술인력과 영업 준비사항을 확인해 보세요.",
                "의료폐기물 수집·운반업에 필요한 기술인력과 연락장소 또는 사무실 등 영업 준비사항을 확인하여 확보계획을 세우는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-medical-collection"
            );

            return;
        }


        // 모두 예
        showResult(
            "기본적인 사업 준비사항이 어느 정도 정리되어 있습니다.",
            "취급할 의료폐기물의 종류와 운반방법, 차량·시설 및 기술인력 등이 정리되어 있다면 다음 단계로 실제 적용되는 세부 허가기준과 사업계획서 및 제출자료를 확인해 보는 것이 좋습니다.",
            "result-success",
            "consult.html?type=waste-medical-collection"
        );

    });

    return;
}

// 건설폐기물 수집·운반업 자가진단
if (document.querySelector('input[name="constructionWasteType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wasteType =
            document.querySelector('input[name="constructionWasteType"]:checked')?.value;

        const wastePlan =
            document.querySelector('input[name="constructionWastePlan"]:checked')?.value;

        const wasteVehicle =
            document.querySelector('input[name="constructionWasteVehicle"]:checked')?.value;

        const wasteOffice =
            document.querySelector('input[name="constructionWasteOffice"]:checked')?.value;

        const wasteCapital =
            document.querySelector('input[name="constructionWasteCapital"]:checked')?.value;

        const wasteProcedure =
            document.querySelector('input[name="constructionWasteProcedure"]:checked')?.value;


        // 미응답 확인
        if (
            !wasteType ||
            !wastePlan ||
            !wasteVehicle ||
            !wasteOffice ||
            !wasteCapital ||
            !wasteProcedure
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            wasteType === "unknown" ||
            wastePlan === "unknown" ||
            wasteVehicle === "unknown" ||
            wasteOffice === "unknown" ||
            wasteCapital === "unknown" ||
            wasteProcedure === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "건설폐기물 수집·운반업은 취급하려는 폐기물과 운반계획뿐 아니라 차량, 연락장소 또는 사무실, 자본금 또는 재산 등의 허가기준을 함께 확인해야 합니다. 명확하지 않은 사항부터 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-construction-collection"
            );
            return;
        }


        // 건설폐기물 해당 여부
        if (wasteType === "no") {
            showResult(
                "수집·운반하려는 폐기물의 종류부터 확인해 보세요.",
                "먼저 취급하려는 폐기물이 건설폐기물에 해당하는지 확인한 후 적용되는 수집·운반업 허가기준을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-construction-collection"
            );
            return;
        }


        // 수집·운반계획
        if (wastePlan === "no") {
            showResult(
                "수집·운반하려는 사업내용을 구체화할 필요가 있습니다.",
                "어떤 건설폐기물을 어디에서 수집하여 어떤 방법으로 운반할 것인지 정리한 후 차량 등 필요한 허가요건을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-construction-collection"
            );
            return;
        }


        // 차량
        if (wasteVehicle === "no") {
            showResult(
                "수집·운반차량 확보계획을 검토해 보세요.",
                "건설폐기물 수집·운반업에는 수집·운반차량에 관한 허가기준이 있으므로 취급하려는 건설폐기물과 운반방법을 확인한 후 필요한 차량을 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-construction-collection"
            );
            return;
        }


        // 연락장소 또는 사무실
        if (wasteOffice === "no") {
            showResult(
                "연락장소 또는 사무실 확보계획이 필요합니다.",
                "건설폐기물 수집·운반업의 허가기준에는 연락장소 또는 사무실이 포함되므로 영업 준비과정에서 함께 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-construction-collection"
            );
            return;
        }


        // 자본금 또는 재산
        if (wasteCapital === "no") {
            showResult(
                "자본금 또는 재산 요건을 확인해 보세요.",
                "건설폐기물 수집·운반업에는 자본금 또는 재산에 관한 허가기준이 있으며 법인과 개인의 기준이 다릅니다. 사업자 형태에 맞는 기준을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-construction-collection"
            );
            return;
        }


        // 사업계획 절차
        if (wasteProcedure === "no") {
            showResult(
                "사업계획 단계부터 준비하는 것이 좋습니다.",
                "건설폐기물 수집·운반업은 바로 허가신청을 하는 것이 아니라 건설폐기물 처리 사업계획서를 먼저 제출하여 적합 여부를 검토받는 절차가 선행됩니다.",
                "result-check",
                "consult.html?type=waste-construction-collection"
            );
            return;
        }


        // 모두 예
        showResult(
            "기본적인 사업 준비사항이 어느 정도 정리되어 있습니다.",
            "취급하려는 건설폐기물과 수집·운반계획, 차량, 연락장소 또는 사무실 및 자본금·재산 요건을 확인하셨다면 다음 단계로 실제 허가기준과 건설폐기물 처리 사업계획서 및 제출자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=waste-construction-collection"
        );

    });

    return;
}

// 일반폐기물 중간처분업(기계식) 자가진단
if (document.querySelector('input[name="mechanicalWasteType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wasteType =
            document.querySelector('input[name="mechanicalWasteType"]:checked')?.value;

        const wasteMethod =
            document.querySelector('input[name="mechanicalWasteMethod"]:checked')?.value;

        const wasteFacility =
            document.querySelector('input[name="mechanicalWasteFacility"]:checked')?.value;

        const wasteStorage =
            document.querySelector('input[name="mechanicalWasteStorage"]:checked')?.value;

        const wasteTransport =
            document.querySelector('input[name="mechanicalWasteTransport"]:checked')?.value;

        const wastePersonnel =
            document.querySelector('input[name="mechanicalWastePersonnel"]:checked')?.value;


        // 미응답 확인
        if (
            !wasteType ||
            !wasteMethod ||
            !wasteFacility ||
            !wasteStorage ||
            !wasteTransport ||
            !wastePersonnel
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다
        if (
            wasteType === "unknown" ||
            wasteMethod === "unknown" ||
            wasteFacility === "unknown" ||
            wasteStorage === "unknown" ||
            wasteTransport === "unknown" ||
            wastePersonnel === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "기계적 중간처분업은 취급하려는 폐기물과 처분방법을 먼저 확인하고, 처분시설·보관시설·계량시설 및 기술인력 등 적용되는 허가기준을 함께 검토해야 합니다.",
                "result-check",
                "consult.html?type=waste-general-mechanical-treatment"
            );
            return;
        }


        // 폐기물 종류
        if (wasteType === "no") {
            showResult(
                "처분하려는 폐기물의 종류부터 정하는 것이 좋습니다.",
                "폐기물의 종류에 따라 적용되는 처분업의 유형과 허가기준이 달라질 수 있으므로 어떤 폐기물을 취급할 것인지 먼저 구체화하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-mechanical-treatment"
            );
            return;
        }


        // 기계적 처분 여부
        if (wasteMethod === "no") {
            showResult(
                "적용되는 중간처분업 유형을 다시 확인해 보세요.",
                "기계적 처분이 아니라 소각·화학적 처분·생물학적 처분 등을 계획하고 있다면 다른 중간처분업 기준이 적용될 수 있으므로 실제 처분방법을 먼저 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-mechanical-treatment"
            );
            return;
        }


        // 처분시설
        if (wasteFacility === "no") {
            showResult(
                "처분시설 확보계획을 검토해 보세요.",
                "기계적 중간처분업에는 처분시설의 처리능력 등에 관한 기준이 있으므로 사업내용에 맞는 시설을 검토하고 확보계획을 세우는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-mechanical-treatment"
            );
            return;
        }


        // 보관시설·계량시설
        if (wasteStorage === "no") {
            showResult(
                "보관시설과 계량시설에 대한 검토가 필요합니다.",
                "처분시설뿐 아니라 폐기물을 보관하기 위한 시설과 계량시설도 허가기준에 포함되므로 시설계획을 함께 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-mechanical-treatment"
            );
            return;
        }


        // 기술인력
        if (wastePersonnel === "no") {
            showResult(
                "기술인력 확보계획을 검토해 보세요.",
                "기계적 중간처분업에는 관련 자격을 갖춘 기술인력이 필요하므로 현재 인력의 자격요건을 확인하거나 필요한 인력의 확보계획을 세우는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-mechanical-treatment"
            );
            return;
        }


        // 직접 수집·운반하는 경우
        if (wasteTransport === "yes") {
            showResult(
                "기본 준비사항과 함께 수집·운반차량 기준도 확인해 보세요.",
                "처분대상 폐기물을 직접 수집·운반할 예정이므로 처분시설·보관시설·계량시설·기술인력과 함께 적용되는 수집·운반차량 기준을 확인한 후 사업계획과 허가자료를 준비하는 것이 좋습니다.",
                "result-success",
                "consult.html?type=waste-general-mechanical-treatment"
            );
            return;
        }


        // 직접 수집·운반하지 않는 경우
        showResult(
            "기본적인 사업 준비사항이 어느 정도 정리되어 있습니다.",
            "취급 폐기물과 기계적 처분방법, 처분시설·보관시설·계량시설 및 기술인력이 정리되어 있다면 다음 단계로 실제 시설기준과 사업계획 및 허가신청 자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=waste-general-mechanical-treatment"
        );

    });

    return;
}

// 일반폐기물 중간처분업(소각) 자가진단
if (document.querySelector('input[name="incinerationWasteType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wasteType =
            document.querySelector('input[name="incinerationWasteType"]:checked')?.value;

        const wasteMethod =
            document.querySelector('input[name="incinerationWasteMethod"]:checked')?.value;

        const wasteFacility =
            document.querySelector('input[name="incinerationWasteFacility"]:checked')?.value;

        const wasteStorage =
            document.querySelector('input[name="incinerationWasteStorage"]:checked')?.value;

        const wasteLaboratory =
            document.querySelector('input[name="incinerationWasteLaboratory"]:checked')?.value;

        const wasteTransport =
            document.querySelector('input[name="incinerationWasteTransport"]:checked')?.value;

        const wastePersonnel =
            document.querySelector('input[name="incinerationWastePersonnel"]:checked')?.value;


        // 미응답 확인
        if (
            !wasteType ||
            !wasteMethod ||
            !wasteFacility ||
            !wasteStorage ||
            !wasteLaboratory ||
            !wasteTransport ||
            !wastePersonnel
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            wasteType === "unknown" ||
            wasteMethod === "unknown" ||
            wasteFacility === "unknown" ||
            wasteStorage === "unknown" ||
            wasteLaboratory === "unknown" ||
            wasteTransport === "unknown" ||
            wastePersonnel === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "소각전문 중간처분업은 취급하려는 폐기물과 소각방법뿐 아니라 소각시설, 보관·계량시설, 실험실과 측정·분석 장비 및 기술인력 등을 함께 확인해야 합니다.",
                "result-check",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 폐기물 종류
        if (wasteType === "no") {
            showResult(
                "처분하려는 폐기물의 종류부터 정하는 것이 좋습니다.",
                "폐기물의 종류에 따라 적용되는 처분업의 유형과 허가기준이 달라질 수 있으므로 어떤 폐기물을 소각하려는 것인지 먼저 구체화하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 소각처분 여부
        if (wasteMethod === "no") {
            showResult(
                "적용되는 중간처분업 유형을 다시 확인해 보세요.",
                "소각이 아니라 기계적·화학적·생물학적 방법으로 처분할 계획이라면 다른 중간처분업 기준이 적용될 수 있으므로 실제 처분방법부터 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 소각시설
        if (wasteFacility === "no") {
            showResult(
                "소각시설 확보계획을 검토해 보세요.",
                "소각전문 중간처분업에는 소각시설의 처분능력에 관한 기준이 있으므로 사업내용에 맞는 시설을 검토하고 확보계획을 세우는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 보관시설·계량시설
        if (wasteStorage === "no") {
            showResult(
                "보관시설과 계량시설에 대한 검토가 필요합니다.",
                "소각시설뿐 아니라 폐기물을 보관하기 위한 시설과 계량시설도 허가기준에 포함되므로 전체 시설계획을 함께 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 실험실·측정분석 장비
        if (wasteLaboratory === "no") {
            showResult(
                "실험실과 측정·분석 장비를 확인해 보세요.",
                "소각전문 중간처분업에는 실험실과 배출가스 오염물질을 측정·분석할 수 있는 실험기기가 요구되므로 해당 시설과 장비의 확보계획을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 기술인력
        if (wastePersonnel === "no") {
            showResult(
                "기술인력 확보계획을 검토해 보세요.",
                "소각전문 중간처분업에는 관련 자격을 갖춘 기술인력이 필요하므로 현재 인력의 자격요건을 확인하거나 필요한 인력의 확보계획을 세우는 것이 좋습니다.",
                "result-check",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 직접 수집·운반하는 경우
        if (wasteTransport === "yes") {
            showResult(
                "기본 준비사항과 함께 수집·운반차량 기준도 확인해 보세요.",
                "처분대상 폐기물을 직접 수집·운반할 예정이므로 소각시설, 보관·계량시설, 실험실·측정장비 및 기술인력과 함께 적용되는 수집·운반차량 기준도 확인하는 것이 좋습니다.",
                "result-success",
                "consult.html?type=waste-general-incineration-treatment"
            );
            return;
        }


        // 직접 수집·운반하지 않는 경우
        showResult(
            "기본적인 사업 준비사항이 어느 정도 정리되어 있습니다.",
            "취급 폐기물과 소각방법, 소각시설, 보관·계량시설, 실험실·측정장비 및 기술인력이 정리되어 있다면 다음 단계로 실제 세부 허가기준과 사업계획 및 제출자료를 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=waste-general-incineration-treatment"
        );

    });

    return;
}

// 동물생산업 자가진단
if (document.querySelector('input[name="animalProductionType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const animalType =
            document.querySelector('input[name="animalProductionType"]:checked')?.value;

        const place =
            document.querySelector('input[name="animalProductionPlace"]:checked')?.value;

        const room =
            document.querySelector('input[name="animalProductionRoom"]:checked')?.value;

        const facility =
            document.querySelector('input[name="animalProductionFacility"]:checked')?.value;

        const personnel =
            document.querySelector('input[name="animalProductionPersonnel"]:checked')?.value;

        const plan =
            document.querySelector('input[name="animalProductionPlan"]:checked')?.value;


        // 미응답 확인
        if (
            !animalType ||
            !place ||
            !room ||
            !facility ||
            !personnel ||
            !plan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            animalType === "unknown" ||
            place === "unknown" ||
            room === "unknown" ||
            facility === "unknown" ||
            personnel === "unknown" ||
            plan === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "동물생산업은 생산하려는 동물과 사육규모뿐 아니라 영업장, 사육·분만·격리공간, 사육환경, 관리인력 등의 기준을 함께 확인해야 합니다. 명확하지 않은 부분부터 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-production"
            );
            return;
        }


        // 생산 동물·규모
        if (animalType === "no") {
            showResult(
                "생산하려는 동물과 사육규모부터 정리해 보세요.",
                "생산하려는 반려동물의 종류와 사육규모에 따라 필요한 시설과 관리인력 등을 검토해야 하므로 사업내용을 먼저 구체화하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-production"
            );
            return;
        }


        // 영업장
        if (place === "no") {
            showResult(
                "영업장 후보지를 먼저 검토해 보세요.",
                "동물생산업은 영업장 내부 시설뿐 아니라 건축물 및 토지이용 관련사항도 함께 확인해야 하므로 시설공사나 임대차계약 전에 후보 장소를 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-production"
            );
            return;
        }


        // 사육실·분만실·격리실
        if (room === "no") {
            showResult(
                "동물생산업에 필요한 공간구성을 검토해 보세요.",
                "사육실·분만실·격리실 등은 동물생산업의 중요한 시설요건입니다. 생산하려는 동물과 영업형태를 기준으로 필요한 공간과 배치방법을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-production"
            );
            return;
        }


        // 사육환경·시설
        if (facility === "no") {
            showResult(
                "사육환경과 위생시설에 대한 검토가 필요합니다.",
                "동물을 위생적이고 건강하게 관리할 수 있도록 급·배수, 채광·환기, 온·습도, 청소·소독 등 필요한 시설과 설비를 함께 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-production"
            );
            return;
        }


        // 사육·관리 인력
        if (personnel === "no") {
            showResult(
                "사육·관리 인력 확보계획을 검토해 보세요.",
                "동물생산업은 사육하는 동물과 규모에 따라 필요한 사육·관리 인력을 확보해야 하므로 사업규모에 맞는 인력기준을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-production"
            );
            return;
        }


        // 교육·사업계획
        if (plan === "no") {
            showResult(
                "교육과 사업계획 준비사항을 확인해 보세요.",
                "허가신청을 준비할 때에는 필요한 교육을 이수하고 동물의 사육·관리계획을 포함한 사업계획과 시설·인력 관련자료를 함께 준비해야 합니다.",
                "result-check",
                "consult.html?type=animal-production"
            );
            return;
        }


        // 모두 예
        showResult(
            "기본적인 허가 준비사항이 어느 정도 정리되어 있습니다.",
            "생산하려는 동물과 사육규모, 영업장, 시설 및 관리인력 등이 정리되어 있다면 다음 단계로 실제 적용되는 세부 시설·인력 기준과 사업계획서 및 허가신청 자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=animal-production"
        );

    });

    return;
}

// 동물수입업 자가진단
if (document.querySelector('input[name="animalImportType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const animalType =
            document.querySelector('input[name="animalImportType"]:checked')?.value;

        const place =
            document.querySelector('input[name="animalImportPlace"]:checked')?.value;

        const room =
            document.querySelector('input[name="animalImportRoom"]:checked')?.value;

        const facility =
            document.querySelector('input[name="animalImportFacility"]:checked')?.value;

        const personnel =
            document.querySelector('input[name="animalImportPersonnel"]:checked')?.value;

        const plan =
            document.querySelector('input[name="animalImportPlan"]:checked')?.value;


        // 미응답 확인
        if (
            !animalType ||
            !place ||
            !room ||
            !facility ||
            !personnel ||
            !plan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            animalType === "unknown" ||
            place === "unknown" ||
            room === "unknown" ||
            facility === "unknown" ||
            personnel === "unknown" ||
            plan === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "동물수입업은 수입하려는 동물과 규모뿐 아니라 영업장, 사육실·격리실, 사육환경 및 관리인력 등을 함께 확인해야 합니다. 명확하지 않은 부분부터 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-import"
            );
            return;
        }


        // 수입 동물·규모
        if (animalType === "no") {
            showResult(
                "수입하려는 동물과 규모부터 정리해 보세요.",
                "수입하려는 반려동물의 종류와 규모에 따라 시설 및 사육·관리 인력 등의 검토내용이 달라질 수 있으므로 사업계획을 먼저 구체화하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-import"
            );
            return;
        }


        // 영업장
        if (place === "no") {
            showResult(
                "영업장 후보지를 먼저 검토해 보세요.",
                "동물수입업은 영업장 내부 시설뿐 아니라 건축물 및 토지이용 관련사항도 함께 확인해야 하므로 영업장을 확정하기 전에 적합성을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-import"
            );
            return;
        }


        // 사육실·격리실
        if (room === "no") {
            showResult(
                "사육실과 격리실의 공간구성을 검토해 보세요.",
                "동물수입업은 수입한 동물을 관리할 사육실과 격리실을 구분하여 설치해야 하므로 영업장의 공간구성과 시설계획을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-import"
            );
            return;
        }


        // 사육환경
        if (facility === "no") {
            showResult(
                "동물의 사육환경과 위생시설 검토가 필요합니다.",
                "사료와 물을 공급할 수 있는 설비와 채광·환기, 청소·소독 등 수입 동물을 위생적이고 건강하게 관리하기 위한 시설을 함께 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-import"
            );
            return;
        }


        // 관리인력
        if (personnel === "no") {
            showResult(
                "사육·관리 인력 확보계획을 검토해 보세요.",
                "수입하려는 동물의 종류와 규모에 따라 필요한 사육·관리 인력을 확인하고 이에 맞는 인력 확보계획을 세우는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-import"
            );
            return;
        }


        // 교육·사업계획
        if (plan === "no") {
            showResult(
                "교육과 사업계획 준비사항을 확인해 보세요.",
                "허가신청을 위해 필요한 교육을 확인하고 수입 동물의 사육·관리계획을 포함한 사업계획과 시설·인력 관련자료를 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-import"
            );
            return;
        }


        // 모두 예
        showResult(
            "기본적인 허가 준비사항이 어느 정도 정리되어 있습니다.",
            "수입하려는 동물과 규모, 영업장, 사육·격리시설 및 관리인력 등이 정리되어 있다면 실제 적용되는 세부 시설·인력 기준과 사업계획서 및 허가신청 자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=animal-import"
        );

    });

    return;
}

// 동물전시업 자가진단
if (document.querySelector('input[name="animalExhibitionType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const type =
            document.querySelector('input[name="animalExhibitionType"]:checked')?.value;

        const place =
            document.querySelector('input[name="animalExhibitionPlace"]:checked')?.value;

        const room =
            document.querySelector('input[name="animalExhibitionRoom"]:checked')?.value;

        const safety =
            document.querySelector('input[name="animalExhibitionSafety"]:checked')?.value;

        const facility =
            document.querySelector('input[name="animalExhibitionFacility"]:checked')?.value;

        const plan =
            document.querySelector('input[name="animalExhibitionPlan"]:checked')?.value;


        // 미응답 확인
        if (
            !type ||
            !place ||
            !room ||
            !safety ||
            !facility ||
            !plan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            type === "unknown" ||
            place === "unknown" ||
            room === "unknown" ||
            safety === "unknown" ||
            facility === "unknown" ||
            plan === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "동물전시업은 전시하는 동물의 소유관계와 마릿수, 영업형태뿐 아니라 영업장, 전시·휴식공간, 출입구 안전시설 및 관리환경 등을 함께 확인해야 합니다.",
                "result-check",
                "consult.html?type=animal-exhibition"
            );
            return;
        }


        // 동물전시업 해당 여부
        if (type === "no") {
            showResult(
                "동물전시업에 해당하는지 먼저 확인해 보세요.",
                "동물전시업은 영업자가 소유한 반려동물을 일정 규모 이상 전시하여 고객에게 보여주거나 접촉하게 하는 영업입니다. 실제 운영방식을 확인하여 동물전시업 등록 대상인지 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-exhibition"
            );
            return;
        }


        // 영업장
        if (place === "no") {
            showResult(
                "영업장 후보지를 먼저 검토해 보세요.",
                "동물전시업은 영업장의 시설기준뿐 아니라 건축물 및 토지이용 관련사항도 함께 확인해야 하므로 장소를 확정하기 전에 적합성을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-exhibition"
            );
            return;
        }


        // 전시실·휴식실
        if (room === "no") {
            showResult(
                "전시공간과 휴식공간의 구성을 검토해 보세요.",
                "동물전시업은 동물을 전시하는 공간과 동물이 쉴 수 있는 공간을 구분하여 마련해야 하므로 영업장 배치계획을 먼저 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-exhibition"
            );
            return;
        }


        // 출입구 안전·소독
        if (safety === "no") {
            showResult(
                "출입구의 안전 및 위생시설 검토가 필요합니다.",
                "동물이 영업장 밖으로 나가는 것을 방지하기 위한 출입구 시설과 전염성 질병의 유입을 예방하기 위한 소독장비 등을 갖추는 방안을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-exhibition"
            );
            return;
        }


        // 동물별 관리환경
        if (facility === "no") {
            showResult(
                "전시하는 동물에 맞는 관리환경을 검토해 보세요.",
                "전시하는 동물의 생리적 특성을 고려하여 필요한 생활·활동공간과 관리시설을 마련해야 하므로 동물의 종류에 따른 시설기준을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-exhibition"
            );
            return;
        }


        // 인력·교육·사업계획
        if (plan === "no") {
            showResult(
                "관리인력과 등록 준비사항을 확인해 보세요.",
                "동물전시업은 운영규모에 맞는 관리인력을 확보하고 필요한 교육, 사육·관리계획 및 사업계획 등 등록신청 자료를 준비해야 합니다.",
                "result-check",
                "consult.html?type=animal-exhibition"
            );
            return;
        }


        // 모두 예
        showResult(
            "기본적인 등록 준비사항이 어느 정도 정리되어 있습니다.",
            "영업형태와 영업장, 전시·휴식공간, 안전·위생시설 및 관리계획이 정리되어 있다면 실제 적용되는 세부 시설·인력 기준과 등록신청 자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=animal-exhibition"
        );

    });

    return;
}

// 동물위탁관리업 자가진단
if (document.querySelector('input[name="animalConsignmentType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const type =
            document.querySelector('input[name="animalConsignmentType"]:checked')?.value;

        const place =
            document.querySelector('input[name="animalConsignmentPlace"]:checked')?.value;

        const room =
            document.querySelector('input[name="animalConsignmentRoom"]:checked')?.value;

        const facility =
            document.querySelector('input[name="animalConsignmentFacility"]:checked')?.value;

        const safety =
            document.querySelector('input[name="animalConsignmentSafety"]:checked')?.value;

        const plan =
            document.querySelector('input[name="animalConsignmentPlan"]:checked')?.value;


        // 미응답 확인
        if (
            !type ||
            !place ||
            !room ||
            !facility ||
            !safety ||
            !plan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            type === "unknown" ||
            place === "unknown" ||
            room === "unknown" ||
            facility === "unknown" ||
            safety === "unknown" ||
            plan === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "동물위탁관리업은 운영형태와 영업장뿐 아니라 위탁관리 공간, 개별 휴식공간, 급이·급수시설, 출입구 안전시설 및 관리인력 등을 함께 확인해야 합니다.",
                "result-check",
                "consult.html?type=animal-consignment"
            );
            return;
        }


        // 영업 해당 여부
        if (type === "no") {
            showResult(
                "동물위탁관리업에 해당하는지 먼저 확인해 보세요.",
                "반려동물 소유자의 위탁을 받아 영업장 안에서 동물을 일시적으로 사육·훈련 또는 보호하는 형태인지 실제 운영방식을 확인할 필요가 있습니다.",
                "result-check",
                "consult.html?type=animal-consignment"
            );
            return;
        }


        // 영업장
        if (place === "no") {
            showResult(
                "영업장 후보지를 먼저 검토해 보세요.",
                "동물위탁관리업은 영업장의 시설기준과 건축물 관련사항 등을 함께 확인해야 하므로 장소를 확정하기 전에 등록 가능성을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-consignment"
            );
            return;
        }


        // 위탁관리실·고객응대실
        if (room === "no") {
            showResult(
                "영업장 내부 공간구성을 검토해 보세요.",
                "동물을 위탁관리하는 공간과 고객을 응대하는 공간은 영업형태에 맞게 분리·구획 또는 구분할 수 있도록 배치계획을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-consignment"
            );
            return;
        }


        // 개별 휴식실·급이·급수
        if (facility === "no") {
            showResult(
                "동물의 휴식 및 관리시설 검토가 필요합니다.",
                "위탁관리하는 동물이 개별적으로 쉴 수 있는 공간과 사료 및 물을 제공할 수 있는 설비를 갖추는 방안을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-consignment"
            );
            return;
        }


        // 출입구 안전시설
        if (safety === "no") {
            showResult(
                "동물 이탈방지 시설을 검토해 보세요.",
                "위탁관리 중인 동물이 영업장 밖으로 나가지 않도록 출입구의 안전시설을 갖추는 방안을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-consignment"
            );
            return;
        }


        // 인력·교육·사업계획
        if (plan === "no") {
            showResult(
                "관리인력과 등록 준비사항을 확인해 보세요.",
                "운영규모에 맞는 관리인력을 확보하고 필요한 교육, 사육·관리계획 및 사업계획 등 등록신청 자료를 준비해야 합니다.",
                "result-check",
                "consult.html?type=animal-consignment"
            );
            return;
        }


        // 모두 예
        showResult(
            "기본적인 등록 준비사항이 어느 정도 정리되어 있습니다.",
            "운영형태와 영업장, 위탁관리 공간, 동물 관리시설 및 인력계획이 정리되어 있다면 실제 적용되는 세부 시설·인력 기준과 등록신청 자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=animal-consignment"
        );

    });

    return;
}

// 동물미용업 자가진단
if (document.querySelector('input[name="animalGroomingType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const type =
            document.querySelector('input[name="animalGroomingType"]:checked')?.value;

        const place =
            document.querySelector('input[name="animalGroomingPlace"]:checked')?.value;

        const work =
            document.querySelector('input[name="animalGroomingWork"]:checked')?.value;

        const bath =
            document.querySelector('input[name="animalGroomingBath"]:checked')?.value;

        const disinfection =
            document.querySelector('input[name="animalGroomingDisinfection"]:checked')?.value;

        const plan =
            document.querySelector('input[name="animalGroomingPlan"]:checked')?.value;


        // 미응답 확인
        if (
            !type ||
            !place ||
            !work ||
            !bath ||
            !disinfection ||
            !plan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 운영방식을 아직 정하지 않은 경우
        if (type === "unknown") {
            showResult(
                "동물미용업의 운영방식을 먼저 검토해 보세요.",
                "고정된 영업장에서 운영하는 경우와 자동차를 이용하는 경우에는 적용되는 시설기준이 다릅니다. 계획하고 있는 영업방식을 확인한 후 필요한 시설과 등록요건을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 나머지 항목 중 잘 모르겠습니다가 있는 경우
        if (
            place === "unknown" ||
            work === "unknown" ||
            bath === "unknown" ||
            disinfection === "unknown" ||
            plan === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "동물미용업은 운영방식에 따라 필요한 영업장 또는 차량, 미용작업 공간, 목욕·급배수·건조설비 및 위생관리 시설 등을 함께 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 장소 또는 차량
        if (place === "no") {
            showResult(
                "영업에 사용할 장소 또는 차량을 먼저 검토해 보세요.",
                type === "vehicle"
                    ? "자동차를 이용한 동물미용업은 사용할 수 있는 차량의 종류와 차량 내부에 갖춰야 할 별도의 시설기준이 있으므로 차량을 정하기 전에 기준을 확인하는 것이 좋습니다."
                    : "고정된 장소에서 동물미용업을 하는 경우에는 영업장과 내부 시설기준을 함께 확인해야 하므로 장소를 확정하기 전에 등록 가능성을 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 작업공간 및 작업대
        if (work === "no") {
            showResult(
                "미용작업 공간과 안전설비를 검토해 보세요.",
                "동물을 안전하게 미용할 수 있는 작업공간과 미용작업대를 마련하고 작업 중 동물이 떨어지는 것을 방지할 수 있는 안전조치 등을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 목욕·급배수·건조설비
        if (bath === "no") {
            showResult(
                "목욕 및 급배수·건조설비를 검토해 보세요.",
                "동물미용업에는 동물의 목욕과 위생관리에 필요한 시설과 급배수·냉온수 및 건조설비 등을 갖추는 방안을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 소독설비
        if (disinfection === "no") {
            showResult(
                "미용기구의 위생관리 설비를 검토해 보세요.",
                "미용에 사용하는 기구를 위생적으로 관리할 수 있도록 필요한 소독장비 등을 갖추는 방안을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 등록 준비사항
        if (plan === "no") {
            showResult(
                "등록을 위한 준비사항을 추가로 확인해 보세요.",
                "운영방식에 맞는 시설기준과 필요한 교육, 사육·관리계획 및 사업계획 등 등록신청에 필요한 사항을 함께 준비해야 합니다.",
                "result-check",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 자동차 이용형
        if (type === "vehicle") {
            showResult(
                "자동차 이용 동물미용업의 기본 준비사항이 정리되어 있습니다.",
                "자동차를 이용하는 동물미용업은 일반적인 미용시설 외에도 사용할 수 있는 차량의 종류와 급수·오수처리, 조명·환기, 전기·소화설비 등 차량에 적용되는 별도 기준을 구체적으로 확인하는 것이 좋습니다.",
                "result-success",
                "consult.html?type=animal-grooming"
            );
            return;
        }


        // 고정 영업장형
        showResult(
            "고정 영업장형 동물미용업의 기본 준비사항이 정리되어 있습니다.",
            "영업장과 미용작업 공간, 목욕·급배수·건조 및 소독설비 등이 준비되어 있다면 실제 영업장에 적용되는 세부 시설기준과 등록신청 자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=animal-grooming"
        );

    });

    return;
}

// 동물운송업 자가진단
if (document.querySelector('input[name="animalTransportType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const type =
            document.querySelector('input[name="animalTransportType"]:checked')?.value;

        const vehicle =
            document.querySelector('input[name="animalTransportVehicle"]:checked')?.value;

        const environment =
            document.querySelector('input[name="animalTransportEnvironment"]:checked')?.value;

        const safety =
            document.querySelector('input[name="animalTransportSafety"]:checked')?.value;

        const space =
            document.querySelector('input[name="animalTransportSpace"]:checked')?.value;

        const plan =
            document.querySelector('input[name="animalTransportPlan"]:checked')?.value;


        // 미응답 확인
        if (
            !type ||
            !vehicle ||
            !environment ||
            !safety ||
            !space ||
            !plan
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            type === "unknown" ||
            vehicle === "unknown" ||
            environment === "unknown" ||
            safety === "unknown" ||
            space === "unknown" ||
            plan === "unknown"
        ) {
            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "동물운송업은 영업형태뿐 아니라 사용하는 자동차의 종류와 구조, 냉·난방 및 안전시설, 동물 운송공간과 운송인력 등을 함께 확인해야 합니다.",
                "result-check",
                "consult.html?type=animal-transport"
            );
            return;
        }


        // 동물운송업 해당 여부
        if (type === "no") {
            showResult(
                "동물운송업에 해당하는지 먼저 확인해 보세요.",
                "자동차를 이용하여 반려동물을 운송하는 영업인지 실제 운영방식을 확인하여 동물운송업 등록 대상에 해당하는지 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-transport"
            );
            return;
        }


        // 차량
        if (vehicle === "no") {
            showResult(
                "운송에 사용할 자동차를 먼저 검토해 보세요.",
                "동물운송업은 사용할 수 있는 자동차의 종류가 정해져 있고 자동차 자체가 영업장으로 취급되므로 차량을 결정하기 전에 등록기준에 적합한지 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=animal-transport"
            );
            return;
        }


        // 운송환경
        if (environment === "no") {
            showResult(
                "동물을 보호할 수 있는 운송환경을 검토해 보세요.",
                "운송 중 동물이 직사광선이나 비바람을 피할 수 있고 적정한 온도가 유지될 수 있도록 차량의 구조와 냉·난방설비 등을 검토해야 합니다.",
                "result-check",
                "consult.html?type=animal-transport"
            );
            return;
        }


        // 안전시설
        if (safety === "no") {
            showResult(
                "운송 중 동물의 안전을 위한 시설을 검토해 보세요.",
                "갑작스러운 출발이나 제동 등으로 동물이 다치지 않도록 필요한 안전시설을 갖추고 운송 중에도 동물의 상태를 확인할 수 있도록 해야 합니다.",
                "result-check",
                "consult.html?type=animal-transport"
            );
            return;
        }


        // 공간구획 및 고정시설
        if (space === "no") {
            showResult(
                "차량 내부의 동물 운송공간을 검토해 보세요.",
                "사람이 이용하는 공간과 동물이 위치하는 공간을 안전하게 구획하고 이동장 또는 안전벨트 등을 이용하여 동물이 안전하게 이동할 수 있도록 준비해야 합니다.",
                "result-check",
                "consult.html?type=animal-transport"
            );
            return;
        }


        // 운송인력·교육 등
        if (plan === "no") {
            showResult(
                "운송인력과 등록 준비사항을 확인해 보세요.",
                "동물운송업은 운송인력의 운전경력 요건을 확인하고 필요한 교육과 사업계획 등 등록신청에 필요한 사항을 함께 준비해야 합니다.",
                "result-check",
                "consult.html?type=animal-transport"
            );
            return;
        }


        // 모두 예
        showResult(
            "기본적인 등록 준비사항이 어느 정도 정리되어 있습니다.",
            "운송차량과 동물 운송환경, 안전시설 및 운송인력 등이 준비되어 있다면 차량의 세부 시설기준과 운전경력 등 실제 등록기준 및 신청자료를 구체적으로 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=animal-transport"
        );

    });

    return;
}

// 야생동물 수입업 허가 자가진단
if (document.querySelector('input[name="wildlifeImportType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wildlifeImportType =
            document.querySelector('input[name="wildlifeImportType"]:checked');

        const wildlifeImportProcedure =
            document.querySelector('input[name="wildlifeImportProcedure"]:checked');

        const wildlifeImportRoom =
            document.querySelector('input[name="wildlifeImportRoom"]:checked');

        const wildlifeImportFacility =
            document.querySelector('input[name="wildlifeImportFacility"]:checked');

        const wildlifeImportEducation =
            document.querySelector('input[name="wildlifeImportEducation"]:checked');

        const wildlifeImportManagement =
            document.querySelector('input[name="wildlifeImportManagement"]:checked');

        const wildlifeImportDocuments =
            document.querySelector('input[name="wildlifeImportDocuments"]:checked');


        // 모든 문항 응답 확인
        if (
            !wildlifeImportType ||
            !wildlifeImportProcedure ||
            !wildlifeImportRoom ||
            !wildlifeImportFacility ||
            !wildlifeImportEducation ||
            !wildlifeImportManagement ||
            !wildlifeImportDocuments
        ) {
            alert("모든 항목에 답변해 주세요.");
            return;
        }


        const answers = [
            wildlifeImportType.value,
            wildlifeImportProcedure.value,
            wildlifeImportRoom.value,
            wildlifeImportFacility.value,
            wildlifeImportEducation.value,
            wildlifeImportManagement.value,
            wildlifeImportDocuments.value
        ];


        const noCount =
            answers.filter(value => value === "no").length;

        const unknownCount =
            answers.filter(value => value === "unknown").length;


        // 모두 예
        if (noCount === 0 && unknownCount === 0) {

            showResult(
                "허가 준비상태가 비교적 양호합니다.",
                "현재 답변을 기준으로 보면 야생동물 수입업 허가를 위한 주요 준비사항이 비교적 잘 갖춰져 있습니다. 다만 실제 허가 가능 여부는 수입하려는 야생동물과 수입절차, 영업장 및 시설의 구체적인 상태를 확인하여 최종 검토해야 합니다.",
                "result-success",
                "consult.html?type=wildlife-import"
            );

        }

        // 아니오가 하나 이상
        else if (noCount > 0) {

            showResult(
                "허가 신청 전에 추가 검토가 필요한 사항이 있습니다.",
                "현재 준비되지 않은 항목이 있습니다. 야생동물 수입업은 취급 대상과 수입절차, 사육·격리시설, 교육 및 관리체계 등을 함께 검토해야 하므로 부족한 부분을 확인한 후 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-import"
            );

        }

        // 잘 모르겠습니다만 있는 경우
        else {

            showResult(
                "허가요건에 대한 확인이 필요합니다.",
                "일부 항목의 적용 여부를 정확히 판단하기 어려운 상태입니다. 수입하려는 야생동물과 수입계획, 영업장 현황을 기준으로 허가대상 여부와 필요한 시설·절차를 먼저 확인해 보는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-import"
            );

        }

    });

    return;
}

// 야생동물 생산업 허가 자가진단
if (document.querySelector('input[name="wildlifeProductionType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wildlifeProductionType =
            document.querySelector('input[name="wildlifeProductionType"]:checked');

        const wildlifeProductionRoom =
            document.querySelector('input[name="wildlifeProductionRoom"]:checked');

        const wildlifeProductionBirth =
            document.querySelector('input[name="wildlifeProductionBirth"]:checked');

        const wildlifeProductionSale =
            document.querySelector('input[name="wildlifeProductionSale"]:checked');

        const wildlifeProductionEnvironment =
            document.querySelector('input[name="wildlifeProductionEnvironment"]:checked');

        const wildlifeProductionEducation =
            document.querySelector('input[name="wildlifeProductionEducation"]:checked');

        const wildlifeProductionManagement =
            document.querySelector('input[name="wildlifeProductionManagement"]:checked');

        const wildlifeProductionDocuments =
            document.querySelector('input[name="wildlifeProductionDocuments"]:checked');


        // 모든 문항 응답 확인
        if (
            !wildlifeProductionType ||
            !wildlifeProductionRoom ||
            !wildlifeProductionBirth ||
            !wildlifeProductionSale ||
            !wildlifeProductionEnvironment ||
            !wildlifeProductionEducation ||
            !wildlifeProductionManagement ||
            !wildlifeProductionDocuments
        ) {
            alert("모든 항목에 답변해 주세요.");
            return;
        }


        const answers = [
            wildlifeProductionType.value,
            wildlifeProductionRoom.value,
            wildlifeProductionBirth.value,
            wildlifeProductionSale.value,
            wildlifeProductionEnvironment.value,
            wildlifeProductionEducation.value,
            wildlifeProductionManagement.value,
            wildlifeProductionDocuments.value
        ];


        const noCount =
            answers.filter(value => value === "no").length;

        const unknownCount =
            answers.filter(value => value === "unknown").length;


        // 모두 준비되었거나 해당 없음인 경우
        if (noCount === 0 && unknownCount === 0) {

            showResult(
                "허가 준비상태가 비교적 양호합니다.",
                "현재 답변을 기준으로 보면 야생동물 생산업 허가를 위한 주요 준비사항이 비교적 잘 갖춰져 있습니다. 다만 실제 허가 가능 여부는 생산하려는 야생동물과 번식·판매 방식, 영업장 및 시설의 구체적인 상태를 확인하여 최종 검토해야 합니다.",
                "result-success",
                "consult.html?type=wildlife-production"
            );

        }

        // 아니오가 하나 이상
        else if (noCount > 0) {

            showResult(
                "허가 신청 전에 추가 검토가 필요한 사항이 있습니다.",
                "현재 준비되지 않은 항목이 있습니다. 야생동물 생산업은 생산 대상과 번식·판매 방식에 따라 필요한 시설이 달라질 수 있으므로 영업장과 사육·격리시설, 필요한 추가 공간, 교육 및 관리체계 등을 함께 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-production"
            );

        }

        // 잘 모르겠습니다만 있는 경우
        else {

            showResult(
                "허가요건에 대한 확인이 필요합니다.",
                "일부 항목의 적용 여부를 정확히 판단하기 어려운 상태입니다. 생산하려는 야생동물과 번식·판매 계획을 기준으로 필요한 시설과 허가 준비사항을 먼저 확인해 보는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-production"
            );

        }

    });

    return;
}

// 야생동물 위탁관리업 허가 자가진단
if (document.querySelector('input[name="wildlifeConsignmentType"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const wildlifeConsignmentType =
            document.querySelector('input[name="wildlifeConsignmentType"]:checked');

        const wildlifeConsignmentRoom =
            document.querySelector('input[name="wildlifeConsignmentRoom"]:checked');

        const wildlifeConsignmentRest =
            document.querySelector('input[name="wildlifeConsignmentRest"]:checked');

        const wildlifeConsignmentFacility =
            document.querySelector('input[name="wildlifeConsignmentFacility"]:checked');

        const wildlifeConsignmentEducation =
            document.querySelector('input[name="wildlifeConsignmentEducation"]:checked');

        const wildlifeConsignmentManagement =
            document.querySelector('input[name="wildlifeConsignmentManagement"]:checked');

        const wildlifeConsignmentDocuments =
            document.querySelector('input[name="wildlifeConsignmentDocuments"]:checked');


        // 모든 문항 응답 확인
        if (
            !wildlifeConsignmentType ||
            !wildlifeConsignmentRoom ||
            !wildlifeConsignmentRest ||
            !wildlifeConsignmentFacility ||
            !wildlifeConsignmentEducation ||
            !wildlifeConsignmentManagement ||
            !wildlifeConsignmentDocuments
        ) {
            alert("모든 항목에 답변해 주세요.");
            return;
        }


        const answers = [
            wildlifeConsignmentType.value,
            wildlifeConsignmentRoom.value,
            wildlifeConsignmentRest.value,
            wildlifeConsignmentFacility.value,
            wildlifeConsignmentEducation.value,
            wildlifeConsignmentManagement.value,
            wildlifeConsignmentDocuments.value
        ];


        const noCount =
            answers.filter(value => value === "no").length;

        const unknownCount =
            answers.filter(value => value === "unknown").length;


        // 모두 예
        if (noCount === 0 && unknownCount === 0) {

            showResult(
                "허가 준비상태가 비교적 양호합니다.",
                "현재 답변을 기준으로 보면 야생동물 위탁관리업 허가를 위한 주요 준비사항이 비교적 잘 갖춰져 있습니다. 다만 실제 허가 가능 여부는 위탁관리하려는 야생동물과 영업장 및 시설의 구체적인 상태를 확인하여 최종 검토해야 합니다.",
                "result-success",
                "consult.html?type=wildlife-consignment"
            );

        }

        // 아니오가 하나 이상
        else if (noCount > 0) {

            showResult(
                "허가 신청 전에 추가 검토가 필요한 사항이 있습니다.",
                "현재 준비되지 않은 항목이 있습니다. 야생동물 위탁관리업은 위탁관리실과 고객응대실, 개별 휴식공간, 안전·위생시설, 교육 및 관리체계 등을 함께 검토해야 하므로 부족한 부분을 확인한 후 준비하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-consignment"
            );

        }

        // 잘 모르겠습니다만 있는 경우
        else {

            showResult(
                "허가요건에 대한 확인이 필요합니다.",
                "일부 항목의 적용 여부를 정확히 판단하기 어려운 상태입니다. 위탁관리하려는 야생동물과 영업장 계획을 기준으로 필요한 시설과 허가 준비사항을 먼저 확인해 보는 것이 좋습니다.",
                "result-check",
                "consult.html?type=wildlife-consignment"
            );

        }

    });

    return;
}

// =====================================================
// 화장품책임판매업 등록 자가진단
// =====================================================

if (document.querySelector('input[name="cosmeticsType"]')) {

    button.addEventListener("click", function () {

        const cosmeticsType =
            document.querySelector('input[name="cosmeticsType"]:checked');

        const manager =
            document.querySelector('input[name="manager"]:checked');

        const managerQualification =
            document.querySelector('input[name="managerQualification"]:checked');

        const qualitySafety =
            document.querySelector('input[name="qualitySafety"]:checked');

        const qualityTest =
            document.querySelector('input[name="qualityTest"]:checked');


        // 모든 문항 응답 여부 확인
        if (
            !cosmeticsType ||
            !manager ||
            !managerQualification ||
            !qualitySafety ||
            !qualityTest
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // -------------------------------------------------
        // 책임판매관리자가 없는 경우
        // -------------------------------------------------

        if (manager.value === "no") {

            showResult(
                "책임판매관리자 지정이 필요합니다.",
                "화장품책임판매업 등록을 위해서는 책임판매관리자를 두어야 합니다. 현재 지정할 사람이 없다면 자격요건을 갖춘 책임판매관리자를 확보할 수 있는지 먼저 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=cosmetics-responsible-sales"
            );

            return;
        }


        // -------------------------------------------------
        // 책임판매관리자 자격 확인이 필요한 경우
        // -------------------------------------------------

        if (managerQualification.value === "no") {

            showResult(
                "책임판매관리자의 자격요건을 확인해 보세요.",
                "책임판매관리자는 관련 법령에서 정한 자격요건을 갖추어야 합니다. 학력·자격 또는 관련 경력 등을 확인하여 책임판매관리자로 인정될 수 있는지 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=cosmetics-responsible-sales"
            );

            return;
        }


        // -------------------------------------------------
        // 품질관리·판매 후 안전관리 기준
        // -------------------------------------------------

        if (qualitySafety.value === "no") {

            showResult(
                "품질관리 및 안전관리 기준을 준비해야 합니다.",
                "화장품책임판매업자는 화장품의 품질관리와 판매 후 안전관리를 위한 기준을 갖추고 관련 업무를 수행해야 합니다. 등록 준비과정에서 해당 기준과 관리체계를 함께 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=cosmetics-responsible-sales"
            );

            return;
        }


        // -------------------------------------------------
        // 품질검사 방법
        // -------------------------------------------------

        if (qualityTest.value === "no") {

            showResult(
                "품질검사 방법을 확인해 보세요.",
                "판매하려는 화장품에 대해 필요한 품질검사를 실시할 수 있는 방법을 마련해야 합니다. 자체 시험 가능 여부 또는 시험검사기관과의 위탁 방법 등을 확인하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=cosmetics-responsible-sales"
            );

            return;
        }


        // -------------------------------------------------
        // 잘 모르겠습니다가 하나라도 있는 경우
        // -------------------------------------------------

        if (
            cosmeticsType.value === "unknown" ||
            manager.value === "unknown" ||
            managerQualification.value === "unknown" ||
            qualitySafety.value === "unknown" ||
            qualityTest.value === "unknown"
        ) {

            showResult(
                "추가 확인이 필요한 사항이 있습니다.",
                "화장품책임판매업의 유형이나 책임판매관리자의 자격, 품질·안전관리 기준 등 일부 사항에 대한 확인이 필요합니다. 현재 준비상황을 기준으로 등록요건을 구체적으로 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=cosmetics-responsible-sales"
            );

            return;
        }


        // -------------------------------------------------
        // 기본사항이 모두 준비된 경우
        // -------------------------------------------------

        showResult(
            "기본적인 등록 준비사항이 어느 정도 갖추어져 있습니다.",
            "책임판매 유형, 책임판매관리자, 품질관리 및 판매 후 안전관리와 품질검사 방법을 확인하셨다면 다음 단계로 실제 등록신청에 필요한 서류와 세부요건을 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=cosmetics-responsible-sales"
        );

    });

    return;
}

// =====================================================
// 국제회의기획업 등록 자가진단
// =====================================================

if (document.querySelector('input[name="conferenceBusiness"]')) {

    const button = document.getElementById("diagnosisButton");

    button.addEventListener("click", function () {

        const business =
            document.querySelector('input[name="conferenceBusiness"]:checked');

        const capital =
            document.querySelector('input[name="conferenceCapital"]:checked');

        const office =
            document.querySelector('input[name="conferenceOffice"]:checked');

        const officeDocument =
            document.querySelector('input[name="conferenceOfficeDocument"]:checked');

        const plan =
            document.querySelector('input[name="conferencePlan"]:checked');

        const documents =
            document.querySelector('input[name="conferenceDocuments"]:checked');


        // 모든 질문에 답했는지 확인
        if (
            !business ||
            !capital ||
            !office ||
            !officeDocument ||
            !plan ||
            !documents
        ) {
            alert("모든 질문에 답변해 주세요.");
            return;
        }


        // 국제회의기획업 해당 여부 확인
        if (business.value === "no") {

            showResult(
                "국제회의기획업 등록대상 여부를 먼저 확인해 보세요.",
                "하려는 사업의 내용이 국제회의의 기획·준비·진행 등 국제회의기획업에 해당하는지 먼저 확인할 필요가 있습니다. 실제 사업내용을 기준으로 등록대상 여부를 검토하는 것이 좋습니다.",
                "result-check",
                "consult.html?type=international-conference"
            );

            return;
        }


        // 준비되지 않은 항목이 있는 경우
        if (
            capital.value === "no" ||
            office.value === "no" ||
            officeDocument.value === "no" ||
            plan.value === "no" ||
            documents.value === "no"
        ) {

            showResult(
                "등록 신청 전에 추가로 준비할 사항이 있습니다.",
                "현재 답변 중 준비되지 않은 항목이 있습니다. 자본금, 사무실, 사업계획 및 관련 증빙서류 등 부족한 부분을 확인한 후 등록을 준비하는 것이 좋습니다.",
                "result-warning",
                "consult.html?type=international-conference"
            );

            return;
        }


        // 잘 모르겠습니다가 하나라도 있는 경우
        if (
            business.value === "unknown" ||
            capital.value === "unknown" ||
            office.value === "unknown" ||
            officeDocument.value === "unknown" ||
            plan.value === "unknown" ||
            documents.value === "unknown"
        ) {

            showResult(
                "등록요건에 대한 추가 확인이 필요합니다.",
                "일부 항목의 적용 여부를 정확히 판단하기 어려운 상태입니다. 사업내용과 현재 준비상황을 기준으로 국제회의기획업 등록요건과 필요한 서류를 구체적으로 확인해 보는 것이 좋습니다.",
                "result-check",
                "consult.html?type=international-conference"
            );

            return;
        }


        // 기본사항이 모두 준비된 경우
        showResult(
            "기본적인 등록 준비사항이 어느 정도 갖추어져 있습니다.",
            "현재 답변을 기준으로 국제회의기획업 등록을 위한 기본적인 준비사항은 확인된 것으로 보입니다. 실제 신청 전에는 자본금, 사무실, 사업계획 및 관련 증빙서류의 구체적인 내용을 최종 검토하는 것이 좋습니다.",
            "result-success",
            "consult.html?type=international-conference"
        );

    });

    return;
}

});