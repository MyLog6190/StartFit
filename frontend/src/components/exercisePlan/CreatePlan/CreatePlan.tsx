import { Link, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { isShowing } from '@/types/atom'
import { Overlay, SelectionContainer, Tabs, Tab } from './CreatePlan.style'

const overlayVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function CreatePlan() {
  const showing = useRecoilValue(isShowing)
  const setShowing = useSetRecoilState(isShowing)
  return (
    <>
      {showing ? (
        <Overlay variants={overlayVariant} initial="hidden" animate="visible" onClick={() => setShowing(false)}>
          <motion.div onClick={(e) => e.stopPropagation()}>
            <SelectionContainer>
              <Tabs>
                <Link to={'/plan/create/exercise'}>
                  <Tab>운동</Tab>
                </Link>
                <Link to={'/plan/create/programs'}>
                  <Tab>프로그램</Tab>
                </Link>
              </Tabs>
              <Outlet />
            </SelectionContainer>
          </motion.div>
        </Overlay>
      ) : null}
    </>
  )
}

export default CreatePlan
