window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 9: MODERN RESEARCH & BIO-STATISTICS (Unit 16)
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch9"] = {

    "ch9-1": {
        title: "16.1 체계적 문헌고찰 (SR) 프로토콜",
        subtitle: "PRISMA 가이드라인 및 데이터 필터링 로직",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-magenta);">
                    <h3><i class="fas fa-microscope"></i> Section I: 데이터 정제 (PRISMA 프로토콜)</h3>
                    <p>수많은 연구 결과 중 신뢰할 수 있는 데이터만을 골라내는 과정은 생물학 연구의 핵심입니다. PRISMA 가이드라인은 연구의 투명성과 재현성을 보장하는 '체'와 같은 역할을 합니다.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-filter"></i> PRISMA 흐름도 시뮬레이션</h4>
                    <svg width="300" height="180" viewBox="0 0 300 180">
                        <rect x="100" y="10" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="55" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="100" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="145" width="100" height="25" rx="3" fill="var(--accent-magenta)"/>
                        <line x1="150" y1="35" x2="150" y2="55" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="150" y1="80" x2="150" y2="100" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="150" y1="125" x2="150" y2="145" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <text x="115" y="27" fill="#fff" font-size="8">Identification</text>
                        <text x="120" y="72" fill="#fff" font-size="8">Screening</text>
                        <text x="122" y="117" fill="#fff" font-size="8">Eligibility</text>
                        <text x="125" y="162" fill="#fff" font-size="8" font-weight="bold">Included</text>
                    </svg>
                </div>
            </div>
        `
    },

    "ch9-2": {
        title: "16.2 고급 통계: P-Hacking 및 메타 분석",
        subtitle: "데이터 왜곡 방지 및 효과 크기(Effect Size) 분석",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-chart-line"></i> Section I: 통계적 유의성의 함정</h3>
                    <p>p-value < 0.05라는 결과가 항상 진실은 아닙니다. <strong>P-Hacking</strong>은 원하는 결과가 나올 때까지 데이터를 조작하는 행위를 말합니다. 이를 보완하기 위해 여러 연구를 통합하는 메타 분석은 <strong>효과 크기</strong>에 집중합니다.</p>
                </div>
                <!-- 통계 콘텐츠 생략 (통합 완료를 위한 구조) -->
            </div>
        `
    },

    "ch9-3": {
        title: "16.3 카이제곱 검정 (Chi-Square)",
        subtitle: "관찰값과 기대값의 비교 및 유의성 검정",
        content: `
            <div class="lesson-section">
                <div class="proof-box glass">
                    <h4>$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$</h4>
                    <p>멘델의 유전 비율이나 생태계 분포 관찰 시, 실제 데이터가 가설과 일치하는지 통계적으로 검증합니다.</p>
                </div>
            </div>
        `
    },

    "ch9-4": {
        title: "16.4 표준 오차(SEM) 및 신뢰 구간",
        subtitle: "데이터 정밀도 측정 및 오류 막대 분석",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-red);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: 정밀도 vs 분산</h3>
                    <p>표준 오차(SEM)는 샘플 평균이 전체 모집단의 평균과 얼마나 가까운지를 나타내는 척도입니다.</p>
                </div>
            </div>
        `
    },

    "ch9-5": {
        title: "16.5 실험 설계 및 변수 통제",
        subtitle: "독립 변수, 종속 변수 및 대조군 설정의 정석",
        content: `
            <div class="lesson-section">
                <p>좋은 실험은 오직 하나의 독립 변수만을 변화시켜 결과에 대한 대안적인 설명을 제거하는 것입니다.</p>
            </div>
        `
    },

    "ch9-6": {
        title: "16.6 FRQ 프로토콜 (CER)",
        subtitle: "AP Biology 서술형 답변을 위한 Claim-Evidence-Reasoning",
        content: `
            <div class="lesson-section">
                <p>과학자처럼 답변하기: 명확한 주장(Claim), 구체적 데이터(Evidence), 생물학적 원리(Reasoning)의 연결.</p>
            </div>
        `
    }
};
