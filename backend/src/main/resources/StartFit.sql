use START_FIT;

-- ! TABLE_DROP
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS EXERCISE_CATEGORY;
DROP TABLE IF EXISTS EXERCISE;
DROP TABLE IF EXISTS EXERCISE_PROGRAM;
DROP TABLE IF EXISTS PROGRAM_CONTENTS;
DROP TABLE IF EXISTS MY_PLAN;
DROP TABLE IF EXISTS PLAN_INFO;
SET FOREIGN_KEY_CHECKS = 1;

-- ? EXERCISE_CATEGORY 테이블 생성
CREATE TABLE EXERCISE_CATEGORY(
    id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_category VARCHAR(30) NOT NULL
);

-- ? EXERCISE_CATEGORY 테이블에 데이터 삽입
INSERT INTO EXERCISE_CATEGORY (exercise_category) VALUES
('하체'), ('가슴'), ('등'), ('어깨'), ('팔'), ('복근');



-- ? EXERCISE 테이블 생성
CREATE TABLE EXERCISE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_name VARCHAR(255) NOT NULL,
    category_id INT(2) NOT NULL,
    exercise_img VARCHAR(255),
    exercise_description TEXT NOT NULL
);

-- ? EXERCISE_CATEGORY 테이블에 데이터 삽입
INSERT INTO EXERCISE (exercise_name, category_id, exercise_img, exercise_description) VALUES
('핵 스쿼트', 1, '/views/images/libimages/leg/hsqt.png', '1. 머신에 허리를 붙인 상태에서 기본 스쿼트 보폭으로 곧게 섭니다. 2. 허리가 굽지 않도록 배에 힘을 준 상태로 다리가 ㄱ자 모양이 될 때까지 내려갑니다. 3. 대퇴사두(허벅지)와 힙의 자극을 느끼면서, 양발바닥을 지긋이 누르며 올라옵니다.'),
('런지', 1, '/views/images/libimages/leg/lg.png', '1. 양발을 골반 너비만큼 벌리고 상체를 곧게 펴고 섭니다. 2. 한쪽 다리를 뻗어 앞으로 나가면서 두 무릎이 90도 각도를 이룰 때까지 엉덩이를 낮춰줍니다. 이때 상체와 등은 곧게 편 자세를 유지합니다. 3. 양발의 뒤꿈치에 무게 중심을 실어서 몸을 위쪽으로 밀어주며 원래 시작 자세로 돌아옵니다.'),
('컨벤셔널 데드리프트', 1, '/views/images/libimages/leg/barbell-deadlift.jpg', '1. 양발을 골반보다 약간 넓게 벌리고, 바벨의 그립을 어깨보다 조금 넓게 하여 무릎과 팔이 겹치지 않도록 합니다. 2. 등이 굽지 않도록 상체를 곧게 유지하면서, 발바닥으로 지면을 밀어올린다는 느낌으로 바벨을 들어 올립니다. (이때, 복압을 단단하게 유지한채로 바벨을 몸에 붙여서 들어올립니다.) 3. 몸을 완전히 쭉 피고 엉덩이 근육을 수축합니다. 4. 바벨을 들어올린 역순서대로 바닥으로 내려 시작 자세로 돌아갑니다.'),
('레그 익스텐션', 1, '/views/images/libimages/leg/lget.jpg', '1. 의자는 무릎 바로 아래에 올 수 있게, 패드는 발목 살짝 위에 위치할 수 있도록 머신을 조정합니다. 2. 엉덩이가 떨어지지 않게 유지하면서, 허벅지의 힘으로 고정부위를 지긋이 밀어올립니다. 3. 근육의 긴장을 유지하면서 천천히 무릎을 굽혀줍니다.'),
('레그 컬', 1, '/views/images/libimages/leg/lgcl.png', '1. 머신에 엎드린 상태에서, 종아리 쪽의 패드가 아킬레스건 바로 위쪽에 위치하도록 머신을 조정합니다. 2. 발목을 세운 상태에서, 무릎을 굽혀 기구를 올려줍니다. 3. 허리, 엉덩이, 햄스트링에 긴장감을 유지하면서 기구를 천천히 내립니다.'),
('벤치 프레스', 2, '/views/images/libimages/chest/benchpress.png', '1. 벤치에 평평하게 눕습니다. 2. 바벨을 어깨 너비보다 넓게 팔을 벌리고 들어 올리십시오. 3. 바벨을 가슴 위로 가져 와서 몸에 닿기 직전까지 천천히 내립니다. 4. 팔을 위로 올려 바벨을 곧게 올리십시오. 5. 잠시 멈추고 천천히 반복합니다.'),
('인클라인 벤치 프레스', 2, '/views/images/libimages/chest/inclinebenchpress.png', '1. 다리를 어깨 너비를 벌리고 45도 각도로 기울어진 인클라인벤치에 평평하게 눕습니다. 2. 어깨 너비보다 약간 넓게 바벨바를 잡으십시오. 3. 몸 위에 바벨을 올리고 가슴 중앙으로 옮기십시오. 이것이 출발점입니다. 4. 바벨이 가슴에 닿을 때까지 아래로 내립니다. 5. 팔이 완전히 펴질때까지 바벨을 똑바로 들어 올리십시오. 6. 시작 위치로 돌아갑니다.'),
('딥스', 2, '/views/images/libimages/chest/dips.png', '1. 평행봉 사이에 서십시오. 2. 평행봉의 손잡이를 잡고 몸을 밀어 올립니다. 3. 몸을 앞으로 기울이고 팔꿈치를 굽혀 몸을 내리면서 숨을 들이 마시십시오. 4. 다시 팔을 펴면서 숨을 내쉬십시오.'),
('덤벨 플라이', 2, '/views/images/libimages/chest/chestfly.png', '1. 팔꿈치를 약간 구부리고 손바닥이 서로 마주보게 덤벨을 잡고 벤치에 누워 팔을 올립니다. 2. 팔꿈치에 약간의 굽힘을 유지하면서 덤벨을 바닥쪽으로 내리면서 숨을 들이 마십니다. 3. 다시 팔을 올리면서 숨을 내쉽니다.'),
('덤벨 프레스', 2, '/views/images/libimages/chest/dumbellpress.png', '1. 각 손에 덤벨을 잡고 바닥에 발을 단단히 고정하십시오. 2. 오버그립으로 덤벨을 잡고 가슴 위로 팔을 완전히 핍니다. 4. 팔꿈치를 90도 각도로 구부리면서 숨을 들이 마시고 삼두근이 바닥과 평행하도록하십시오. 5. 다시 팔을 펴면서 숨을 내쉬십시오.'),
('랫 풀 다운', 3, '/views/images/libimages/back/lpdw.jpg', '1. 케이블 기계에 앉는다. 2. 타겟 근육에 맞춰 그립 너비를 정하고, 손바닥이 앞으로 향한 상태로 바를 잡으십시오. 3. 허리를 피고 바를 가슴 위쪽으로 당기며 상체를 약간 뒤로 젖힙니다. 4. 잠시 멈추고 바를 시작 위치로 되돌립니다. 5. 반복.'),
('바벨 로우', 3, '/views/images/libimages/back/barbellrow.png', '1. 오버 그립으로 바벨을 잡고 몸통을 곧게 유지한 채 엉덩이를 뒤로 빼면서 상체를 구부리며 숨을 들이 마십니다. 2. 숨을 내쉬면서 바벨을 복부 쪽으로 당깁니다.'),
('덤벨 로우', 3, '/views/images/libimages/back/dbrow.jpg', '1. 오른발을 바닥에 놓고 왼쪽 무릎을 굽혀 평평한 벤치 위에 올립니다. 2. 앞으로 몸을 기울이면 왼쪽 팔과 무릎에서 몸의 무게를 지탱할 수 있습니다. 3. 허리를 펴고 오른손으로 덤벨을 듭니다. 4. 가능한 한 가슴 가까이에 오른팔을 올리십시오. 5. 상단에서 잠시 멈추고 천천히 덤벨을 시작 위치로 내립니다. 6. 반대로하여 덤벨를 드십시오.'),
('풀 업', 3, '/views/images/libimages/back/pu.jpg', '1. 어깨 너비로 팔을 뻗어 언더그립 또는 오버 그립으로 풀업바를 잡습니다. 2. 풀업바가 가슴 위쪽에 닿을때까지 몸통을 당깁니다. 이때 숨을 내쉬십시오. 3. 팔을 완전히 펴고 등이 완전히 펴질 때 숨을 들어 마십니다.'),
('암 풀 다운', 3, '/views/images/libimages/back/apd.jpg', '1. 양 팔을 어깨너비만큼 벌린 상태로 케이블을 바라보고 섭니다. 2. 양손을 어깨너비보다 살짝 넓게 벌려 케이블에 연결한 바를 잡습니다. (엄지가 올라가는 썸리스그립으로 잡으면 광배근에 더 큰 자극을 줄 수 있습니다.) 3. 무릎을 살짝 굽히고 상체를 45도 각도로 숙인 상태에서 광배근의 자극을 느끼며 팔을 아래로 당깁니다. 이 때 팔이 굽혀지지 않게 힘을 준 상태로 삼두를 광배에 붙여준다 생각하며 등을 수축합니다. 4. 가슴을 활짝 편 상태로 광배에 자극을 느끼면서 천천히 시작 자세로 돌아갑니다.'),
('오버 헤드 프레스', 4, '/views/images/libimages/shoulder/ohp.png', '1. 바벨을 어깨너비로 잡고 쇄골 위에 올려둡니다. 2. 등에 힘을 주고 가슴을 피면서 바벨을 위로 밀어올립니다. 3. 바벨이 올라간 동선을 따라 천천히 내려 시작 자세로 돌아옵니다.'),
('덤벨 숄더 프레스', 4, '/views/images/libimages/shoulder/dsp.jpg', '1. 벤치에 앉아 허리를 피고 손바닥을 앞쪽으로 향하게 한 상태에서 각손에 덤벨을 잡습니다. 2. 어깨 높이에서 팔을 들고 시작하십시오. 3. 팔을 펴고 덤벨을 머리 위로 들어 올리십시오. 4. 팔을 끝까지 올리고 팔을 가까이 가져 가십시오. 5. 잠시 멈추고 천천히 덤벨을 시작 위치로 내립니다.'),
('사이드 레터럴 레이즈', 4, '/views/images/libimages/shoulder/slr.jpg', '1. 손바닥 안쪽을 몸쪽으로 향하게하고 양손에 덤벨을 듭니다. 2. 다리를 어깨 넓이로 벌리고, 허리를 펴고, 무릎을 약간 구부리십시오. 3. 팔꿈치를 약간 구부린 상태에서 팔을 어깨 높이까지 들어 올리십시오. 4. 잠시 동안 자세를 유지 한 다음 천천히 팔을 시작 위치로 내립니다.'),
('리버스 펙덱 플라이', 4, '/views/images/libimages/shoulder/rpdf.png', '1. 머신을 마주보고 앉아 가슴을 지지하는 패드에 가슴을 기대고 앉습니다. 2. 팔꿈치를 자연스럽게 구부린 상태로 양손으로 손잡이를 잡아줍니다. 이 때 어깨와 팔꿈치 손이 수평이 되도록 합니다. 3. 후면 삼각근의 자극을 느끼며 팔꿈치를 최대한 뒤로 밀어줍니다. 4. 팔꿈치가 움직이지 않게 제한하면서 시작 자세로 돌아옵니다.'),
('페이스 풀', 4, '/views/images/libimages/shoulder/fp.jpg', '1. 케이블을 머리 높이에 고정한 뒤, 케이블을 바라보고 섭니다. 2. 손바닥이 바닥을 보도록 양손으로 로프를 잡습니다. 3. 가슴을 편 상태로 로프를 얼굴 방향으로 귀 옆까지 힘껏 당깁니다. 4. 팔을 펴먼서 시작 자세로 돌아갑니다.'),
('케이블 푸쉬 다운', 5, '/views/images/libimages/arm/cbpd.jpg', '1. 케이블 앞에 서서 높은 풀리에 스트레이트 바를 연결하십시오. 2. 손바닥을 아래로 향하게하여 손잡이를 잡습니다. 3. 복근에 힘을 주고 등을 똑바로 세웁니다. 4. 접혀있는 팔꿉치를 펴서 손잡이을 허벅지쪽으로 내립니다. 5. 잠시 멈추고 시작 위치로 돌아갑니다.'),
('덤벨 컬', 5, '/views/images/libimages/arm/dbc.jpg', '1. 다리를 어깨 너비로 벌리고 등을 곱게 펴고 손바닥이 앞을 향하도록 덤벨을 잡고 숨을 들어 마십니다. 2. 덤벨을 들어올리면서 손목을 외회전시키면서 숨을 내쉽니다.'),
('케이블 트라이셉스 익스텐션', 5, '/views/images/libimages/arm/cbte.png', '1. 다리를 어깨 너비로 벌리고, 등을 직선으로 펴되, 편한만큼 굽힙니다. 2. 손등을 바깥으로 향하게 하여 양손으로 케이블을 잡습니다. 3. 케이블을 머리 앞으로 당기십시오. 4. 천천히 케이블을 시작 위치까지 올리십시오.'),
('스컬 크러셔', 5, '/views/images/libimages/arm/skcs.png', '1. 벤치에 눕습니다. 2. 손등을 바깥으로 향하게 하여 바벨을 잡으십시오. 3. 팔들 들어 몸과 수직을 유지하십시오. 4. 팔꿈치만 구부리면서 천천히 낮추고 바벨을 올리십시오.'),
('해머 컬', 5, '/views/images/libimages/arm/hmcrl.jpg', '1. 어깨 너비로 다리를 벌리고 등을 공게 펴고, 패러럴 그립으로 덤벨을 잡고 숨을 들어 마십니다. 2. 팔을 들어 올리면서 숨을 내쉽니다.'),
('크런치', 6, '/views/images/libimages/abs/crunch.jpg', '1. 벤치 위에 발을 올려 놓고 허리를 굽히고 무릎을 90도 각도로 구부립니다. 2. 가슴이나 귀에에 손을 얹으십시오. 3. 숨을 내쉬면서 등을 둥글게 구부립니다. 4. 잠시 동안 멈춘후 시작 위치로 내려가며 숨을 들이쉽니다.'),
('행잉 레그레이즈', 6, '/views/images/libimages/abs/hlr.png', '1. 바를 잡고 받침대에 기대 매달립니다. 2. 아랫배에 힘을 주어 양다리를 위로 말아 올려줍니다. 3. 복근에 자극을 느끼며 천천히 양다리를 내려줍니다.'),
('레그레이즈', 6, '/views/images/libimages/abs/lr.png', '1. 엉덩이 아래에 손을 넣고 평평한 벤치 위에 눕습니다. 2. 무릎을 약간 구부리고 다리를 똑바로 유지하고 엉덩이를 90도 전방까지 다리를 들어 올리면서 숨을 내쉽니다. 3. 정상에서 잠시 멈추고 천천히 다리를 시작 위치로 되돌리면서 숨을 들이 마십니다.');

-- ? EXERCISE_PROGRAM 테이블 생성
CREATE TABLE EXERCISE_PROGRAM (
    id INT AUTO_INCREMENT PRIMARY KEY,
    program_name VARCHAR(255) NOT NULL,
    level VARCHAR(20) NOT NULL,
    program_cycle VARCHAR(20) NOT NULL,
    program_description TEXT NOT NULL,
    program_img VARCHAR(255) NOT NULL
);

-- ? EXERCISE_PROGRAM 데이터 입력
INSERT INTO EXERCISE_PROGRAM (program_name, level, program_cycle, program_description, program_img) VALUES
('Strong Lift 5 by 5', '초급', '주 3회', '메인 운동 모든 세트 성공 시 다음 워크 아웃마다 과부하하여 진행. 메인 운동 수행 중 연속 3세트 5회 실패 시 10%씩 중량 감소 시켜 디로딩.', '/views/images/progimges/stl.png'),
('Golden Six', '중급', '주 3회', '마지막 세트 실패지점까지, 마지막 세트 13개 이상 성공하면 다음 워크아웃 최소 과부하', '/views/images/progimges/golden_six.png'),
('GVT', '상급', '주 3회', '이완 4초, 수축 2초. 10*10 수행 성공할 때까지 기록, 성공 시 해당 종목 다음 워크아웃 때 5% 증량.', '/views/images/progimges/gvt.jpg');


-- ? PROGRAM_CONTENTS 테이블 생성
CREATE TABLE PROGRAM_CONTENTS (
    program_id INT NOT NULL,
    exercise_id INT NOT NULL,
    set_num INT NOT NULL,
    reps INT NOT NULL,
    weight INT NOT NULL
);

-- ? PROGRAM_CONTENTS 데이터 입력
INSERT INTO PROGRAM_CONTENTS (program_id, exercise_id, set_num, reps, weight) VALUES
(1, 1, 5, 5, 0),
(1, 6, 5, 5, 0),
(1, 12, 5, 5, 0),
(1, 8, 5, 3, 0),
(1, 24, 8, 2, 0),
(1, 26, 15, 2, 0),
(2, 1, 4, 10, 0),
(2, 6, 3, 10, 0),
(2, 14, 3, 10, 0),
(2, 17, 4, 10, 0),
(2, 22, 3, 10, 0),
(2, 26, 4, 10, 0),
(3, 10, 10, 10, 20),
(3, 14, 10, 10, 20),
(3, 25, 10, 10, 20),
(3, 9, 10, 10, 20),
(3, 11, 10, 10, 20),
(3, 1, 10, 10, 20),
(3, 5, 10, 10, 20),
(3, 28, 10, 10, 20),
(3, 16, 10, 10, 20),
(3, 22, 10, 10, 20),
(3, 18, 10, 10, 20);

-- ? MY_PlAN 테이블 생성
CREATE TABLE MY_PLAN (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    exercise_id INT,
    exercise_name VARCHAR(255) NOT NULL,
    date VARCHAR(30)
);

-- ? PLAN_INFO 테이블 생성
CREATE TABLE PLAN_INFO (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    plan_id BIGINT,
    reps INT,
    set_num INT,
    weight INT,
    do_checked BOOLEAN
);
