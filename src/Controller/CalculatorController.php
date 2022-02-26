<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Model\StringEvaluator;

class CalculatorController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function index(): Response 
    {
        return new Response('<html><body><h1>Hello, welcome to your Calculator app!!!</h1></body></html>');
    }


    /**
     * @Route("/calculator", name="calculator")
     */
    public function number(Request $request): Response
    {
        $expression = $request->query->get('expression');
        $answer = $request->query->get('answer');

        return $this->render('calculator/index.html.twig', [
            'expression' => $expression,
            'answer' => $answer,
        ]);
    }

    /**
     * @Route("/evaluate")
     */
    public function evaluate(Request $request) : Response
    {
        $answer = null;
        $expression = $request->request->get('expression');
        $token = $request->request->get('token');

        // dd($token);

        if ($this->isCsrfTokenValid('evaluate-string', $token)) {
            if(!empty($expression)) {
                $evaluator = new StringEvaluator();
                $answer = $evaluator->evaluateString($expression);
            }
        }

        return $this->redirectToRoute("calculator", [
            'expression' => $expression,
            'answer' => $answer,
        ]);

    }

    
}